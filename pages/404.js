import Link from "next/link";
import { useEffect } from "react";
import useRouter from 'next/router';

const NotFoundPage = () => {
    const router = useRouter;

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 4000);
    }, [])

    return (<div>
        <h2>Sorry...page not found 😥</h2>
        <p>Go back to <Link href="/"><a>Homepage</a></Link></p>
    </div>);
}

export default NotFoundPage;