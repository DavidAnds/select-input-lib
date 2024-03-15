import styles from "./styles.module.css"

export function SelectInput({ options, ...props }: { options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <select {...props} className={styles.select}>
        {options.map((option) => (
          <option key={option} value={option} className={styles.option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
