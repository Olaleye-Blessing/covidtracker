import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="bg-black-primary text-white-primary text-opacity-80">
                    <Main />
                    <NextScript />
                </body>
                {/* <body className="bg-blue-light">
                    <Main />
                    <NextScript />
                </body> */}
            </Html>
        );
    }
}

export default MyDocument;
