export function getCurrentWeekRange(date = new Date()) {
  const day = date.getDay()
  const diffToMonday = date.getDate() - day + (day === 0 ? -6 : 1)

  const monday = new Date(date)
  monday.setDate(diffToMonday)
  monday.setHours(0, 0, 0, 0)

  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)
  sunday.setHours(23, 59, 59, 999)

  return { start: monday, end: sunday }
}