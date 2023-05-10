import Layout from "@/components/Layout";

export default function New() {
    return (
        <Layout>
            <h1>New Product</h1>
            <label>Product Name</label>
            <input type="text" placeholder="product name" />
            <label>Description</label>
            <textarea placeholder="description"></textarea>
            <label>Price (in USD)</label>
            <input type="number" placeholder="price" />
            <button className="btn-primary">Save</button>
        </Layout>
    )
}