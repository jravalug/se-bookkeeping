import { clsx, type ClassValue } from 'clsx'
import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  return dayjs(date).format('D MMMM, YYYY')
}

export function toSentenceCase(str: string): string {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())
}
