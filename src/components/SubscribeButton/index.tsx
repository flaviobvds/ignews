import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    function handleSubscribe(){
        const { data: session } = useSession();
        if (!session) {
            signIn('github')
            return;
        }

        //criação do checkout
    }

    return (
        <button 
            type="button" 
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    );
}