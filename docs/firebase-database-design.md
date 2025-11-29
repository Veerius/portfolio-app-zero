# Firebase Database Design - Portfolio Application

## Overview
Diseño de base de datos NoSQL para Firebase Firestore para una aplicación de portfolio profesional.

---

## Collections Structure

### 1. **users** (Collection)
Información de usuarios/propietarios del portfolio

```typescript
users/{userId}
{
  id: string;
  email: string;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  avatar: string; // URL to storage
  resumeUrl: string; // URL to storage
  githubUrl?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  settings: {
    theme: 'light' | 'dark' | 'system';
    language: 'en' | 'es';
    publicProfile: boolean;
  };
}
```

---

### 2. **projects** (Collection)
Proyectos del portfolio

```typescript
projects/{projectId}
{
  id: string;
  userId: string; // Reference to users collection
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[]; // Array of URLs to storage
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  size: 'small' | 'medium' | 'large';
  order: number; // For custom ordering
  status: 'draft' | 'published' | 'archived';
  views: number;
  likes: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  publishedAt?: Timestamp;
  tags: string[];
  category?: string;
}
```

**Indexes:**
- `userId` + `status` + `order`
- `userId` + `featured`
- `slug` (unique)

---

### 3. **experiences** (Collection)
Experiencia laboral

```typescript
experiences/{experienceId}
{
  id: string;
  userId: string;
  company: string;
  role: string;
  location?: string;
  description: string;
  startDate: string; // 'YYYY-MM'
  endDate?: string; // 'YYYY-MM' or null if current
  current: boolean;
  order: number;
  skills: string[];
  achievements: string[];
  companyLogo?: string; // URL to storage
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

**Indexes:**
- `userId` + `order`
- `userId` + `current`

---

### 4. **skills** (Collection)
Habilidades técnicas

```typescript
skills/{skillId}
{
  id: string;
  userId: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon: string; // Lucide icon name
  proficiency: number; // 1-5 or 1-100
  yearsOfExperience?: number;
  order: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

**Indexes:**
- `userId` + `category` + `order`

---

### 5. **certificates** (Collection)
Certificaciones y cursos

```typescript
certificates/{certificateId}
{
  id: string;
  userId: string;
  name: string;
  issuer: string;
  issueDate: string; // 'YYYY-MM'
  expiryDate?: string; // 'YYYY-MM'
  credentialId?: string;
  credentialUrl?: string;
  image?: string; // URL to storage
  skills: string[]; // Related skills
  order: number;
  verified: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

**Indexes:**
- `userId` + `order`
- `userId` + `verified`

---

### 6. **education** (Collection)
Educación académica

```typescript
education/{educationId}
{
  id: string;
  userId: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string; // 'YYYY-MM'
  endDate?: string; // 'YYYY-MM'
  current: boolean;
  grade?: string;
  description?: string;
  logo?: string; // URL to storage
  order: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

---

### 7. **blog_posts** (Collection - Optional)
Posts de blog si se incluye funcionalidad de blog

```typescript
blog_posts/{postId}
{
  id: string;
  userId: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or HTML
  coverImage?: string;
  tags: string[];
  category?: string;
  status: 'draft' | 'published' | 'archived';
  views: number;
  likes: number;
  readTime: number; // minutes
  publishedAt?: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

---

### 8. **analytics** (Collection)
Analíticas del portfolio

```typescript
analytics/{analyticsId}
{
  id: string;
  userId: string;
  type: 'page_view' | 'project_view' | 'contact_click' | 'download_cv';
  resourceId?: string; // ID of project, post, etc.
  timestamp: Timestamp;
  metadata: {
    userAgent?: string;
    referrer?: string;
    country?: string;
    device?: string;
  };
}
```

**Indexes:**
- `userId` + `timestamp`
- `userId` + `type` + `timestamp`

---

### 9. **contacts** (Collection)
Mensajes de contacto

```typescript
contacts/{contactId}
{
  id: string;
  portfolioUserId: string; // Owner of the portfolio
  name: string;
  email: string;
  subject?: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  createdAt: Timestamp;
  readAt?: Timestamp;
  repliedAt?: Timestamp;
}
```

**Indexes:**
- `portfolioUserId` + `status` + `createdAt`

---

## Security Rules Example

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Users collection
    match /users/{userId} {
      allow read: if true; // Public profiles
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Projects collection
    match /projects/{projectId} {
      allow read: if resource.data.status == 'published' || 
                     (request.auth != null && request.auth.uid == resource.data.userId);
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
                               request.auth.uid == resource.data.userId;
    }
    
    // Experiences collection
    match /experiences/{experienceId} {
      allow read: if true; // Public
      allow write: if request.auth != null && 
                      request.auth.uid == resource.data.userId;
    }
    
    // Skills collection
    match /skills/{skillId} {
      allow read: if true;
      allow write: if request.auth != null && 
                      request.auth.uid == resource.data.userId;
    }
    
    // Certificates collection
    match /certificates/{certificateId} {
      allow read: if true;
      allow write: if request.auth != null && 
                      request.auth.uid == resource.data.userId;
    }
    
    // Contacts collection
    match /contacts/{contactId} {
      allow create: if true; // Anyone can send a message
      allow read, update: if request.auth != null && 
                            request.auth.uid == resource.data.portfolioUserId;
    }
    
    // Analytics collection
    match /analytics/{analyticsId} {
      allow create: if true; // Anyone can create analytics
      allow read: if request.auth != null && 
                     request.auth.uid == resource.data.userId;
    }
  }
}
```

---

## Storage Structure

```
/users/{userId}/
  /avatar/
    - avatar.jpg
  /resume/
    - resume.pdf
  /projects/{projectId}/
    - image1.jpg
    - image2.jpg
  /certificates/{certificateId}/
    - certificate.jpg
  /education/{educationId}/
    - logo.png
```

---

## Queries Examples

### Get all published projects for a user
```typescript
const projectsRef = collection(db, 'projects');
const q = query(
  projectsRef,
  where('userId', '==', userId),
  where('status', '==', 'published'),
  orderBy('order', 'asc')
);
const snapshot = await getDocs(q);
```

### Get current experiences
```typescript
const experiencesRef = collection(db, 'experiences');
const q = query(
  experiencesRef,
  where('userId', '==', userId),
  where('current', '==', true)
);
const snapshot = await getDocs(q);
```

### Get skills by category
```typescript
const skillsRef = collection(db, 'skills');
const q = query(
  skillsRef,
  where('userId', '==', userId),
  where('category', '==', 'frontend'),
  orderBy('order', 'asc')
);
const snapshot = await getDocs(q);
```

---

## Best Practices

1. **Denormalization**: Duplica datos cuando sea necesario para optimizar lecturas
2. **Batch Writes**: Usa batch writes para operaciones múltiples
3. **Pagination**: Implementa paginación para colecciones grandes
4. **Indexes**: Crea índices compuestos para queries complejas
5. **Security**: Siempre valida datos en el cliente y servidor
6. **Timestamps**: Usa `serverTimestamp()` para consistencia
7. **Subcollections**: Considera subcollections para datos relacionados (ej: comments en projects)

---

## Optional Enhancements

### Subcollection: Project Comments
```typescript
projects/{projectId}/comments/{commentId}
{
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  createdAt: Timestamp;
  likes: number;
}
```

### Subcollection: Project Likes
```typescript
projects/{projectId}/likes/{userId}
{
  userId: string;
  createdAt: Timestamp;
}
```

Este diseño es escalable, flexible y sigue las mejores prácticas de Firebase/Firestore! 🚀
