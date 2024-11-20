import FollowButton from '@/components/FollowButton';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className='mx-automax-h-screen flex flex-col items-center'>
      <Image src='/404.svg' alt='404' width={128} height={128} />
      <div className='w-full text-center mt-8 flex flex-col sm:flex-row gap-2'>
        <FollowButton name='回到首页' href='/' target='_self'></FollowButton>
        <FollowButton
          name='X'
          href='https://twitter.com/0xkkdemian'></FollowButton>

        <FollowButton
          name='注册币安'
          href='https://accounts.binance.com/en/register?ref=MKOOSEO4'></FollowButton>

        <FollowButton
          name='kkdemian'
          href='https://kkdemian.com/'></FollowButton>
        <FollowButton
          name='币圈工具'
          href='https://tool.kkdemian.com/'></FollowButton>
      </div>
    </div>
  );
}
