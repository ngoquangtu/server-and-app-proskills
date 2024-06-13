import Image from 'next/image';

export const Logo = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Image src="/logo.svg" alt="logo" width={110} height={120} />
        </div>
    );
}