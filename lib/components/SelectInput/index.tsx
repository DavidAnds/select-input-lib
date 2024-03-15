import styles from "./styles.module.css"

export function SelectInput({ options, ...props }: { options: { label: string; value: string }[] } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <select {...props} className={styles.select}>
        {options.map((option) => (
          <option key={option.value} value={option.value} className={styles.option}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
