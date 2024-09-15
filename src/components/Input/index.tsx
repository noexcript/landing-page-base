
import { ChangeEvent, useState } from 'react'
import { InputProps } from '../../types/input'
import css from './index.module.css'

export const Input = ({ name, label, onChange, type = "text", placeholder }: InputProps) => {
    const [value, setValue] = useState<string>('')
    return (
        <div className={css.input}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setValue(e.target.value)
                    onChange?.(e.target.value)
                }}
                value={value}
                placeholder={placeholder}

            />
        </div>
    )
}