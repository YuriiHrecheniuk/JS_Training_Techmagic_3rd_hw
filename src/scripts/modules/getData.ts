export default function getData<T>(url: string): Promise<T[]> {
  return fetch(url)
    .then(response => response.json()) as Promise<T[]>
}