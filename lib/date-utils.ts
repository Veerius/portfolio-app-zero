/**
 * Calculate the duration between two dates in years and months
 * @param startDate - Start date in format 'YYYY-MM'
 * @param endDate - End date in format 'YYYY-MM' or undefined for current date
 * @param language - Language for output ('en' or 'es')
 * @returns Formatted duration string (e.g., "3 años 2 meses" or "3 years 2 months")
 */
export function calculateDuration(
    startDate: string,
    endDate: string | undefined,
    language: 'en' | 'es' = 'en'
): string {
    const [startYear, startMonth] = startDate.split('-').map(Number);

    const now = new Date();
    const [endYear, endMonth] = endDate
        ? endDate.split('-').map(Number)
        : [now.getFullYear(), now.getMonth() + 1];

    let years = endYear - startYear;
    let months = endMonth - startMonth;

    if (months < 0) {
        years--;
        months += 12;
    }

    const parts: string[] = [];

    if (years > 0) {
        if (language === 'es') {
            parts.push(`${years} ${years === 1 ? 'año' : 'años'}`);
        } else {
            parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
        }
    }

    if (months > 0) {
        if (language === 'es') {
            parts.push(`${months} ${months === 1 ? 'mes' : 'meses'}`);
        } else {
            parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
        }
    }

    if (parts.length === 0) {
        return language === 'es' ? 'Menos de 1 mes' : 'Less than 1 month';
    }

    return parts.join(' ');
}
