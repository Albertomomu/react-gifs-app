import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([])

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }
  return (
    <>
    <div>
      <header>
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={value => addCategory(value)}/>
      </header>
    </div>
    <main>
        {categories.map((category) => (
            <GifGrid key={category} category={category}/>
        ))}
    </main>
    </>
  )
}
