import Layout from "@/components/Layout";

export default function New() {
    return (
        <Layout>
            <input type="text" placeholder="product name" />
            <textarea placeholder="description"></textarea>
        </Layout>
    )
}