import CategoryList from "@/components/CategoryList";

export default async function Home() {

  return (
    <CategoryList />
  )
}







// import { FC } from "react"
// import Link from "next/link"
// import { ICategoryData } from "@/interfaces/category.interface"
// import CategoryItem from "@/components/CategoryItem"

// const Home: FC<ICategoryData> = ({ categories }) => {
//   return (
//     <>
//       <h3>Categories</h3>
//       {categories.length ? (
//         categories.map(category => <CategoryItem key={category.id} category={category} />)
//       ) : (
//         <div>No categories</div>)
//       }
//     </>
//   )
// }

// export default Home