import Document, {
    DocumentContext,
    Head,
    Html,
    NextScript,
    Main,
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="vi">
                <Head>
                    <link
                        rel="icon"
                        href="https://cdn0.fahasa.com/media/favicon/default/favicon4.ico"
                        type="image/x-icon"
                    />
                    <link
                        rel="apple-touch-icon"
                        href="https://cdn0.fahasa.com/media/favicon/default/favicon4.ico"
                        type="image/x-icon"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Nunito"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
