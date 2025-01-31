// npm modules
import { useState } from "react"

// css
import styles from './NewBoard.module.css'

const NewBoard = (props) => {
  const [formData, setFormData ] = useState({
    title: "",
    bgColor: "White",
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
		props.handleAddBoard(formData)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title</label>
          <input
            required
            type="text"
            name="title"
            id="title-input"
            value={formData.title}
            placeholder="Title"
            onChange={handleChange}
          />
        <label htmlFor="bgColor-input">Background Color</label>
          <select
            required
            name="bgColor"
            id="bgColor-input"
            value={formData.bgColor}
            onChange={handleChange}
          >
            <option value="White">White</option>
            <option value="Gray">Gray</option>
            <option value="Cyan">Cyan</option>
            <option value="Magenta">Magenta</option>
          </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewBoard