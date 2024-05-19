'use client';

import FollowButton from '@/components/FollowButton';
import { Avatar, Card, CardBody, CardHeader, Chip } from '@nextui-org/react';

export default function DeveloperCard() {
  return (
    <div className='flex w-full items-start justify-center mt-12'>
      <Card className='mt-10 w-[400px]'>
        <CardHeader className='relative flex h-[100px] flex-col justify-end overflow-visible bg-gradient-to-br from-indigo-300 via-Cyan-300 to-blue-400'>
          <Avatar className='h-20 w-20 translate-y-12' src='/avatar.jpg' />
        </CardHeader>
        <CardBody>
          <div className='pb-4 pt-6'>
            <p className='text-large font-medium'>kkdemian/白总</p>
            <p className='max-w-[90%] text-small text-default-400'>
              @0xkkdemian
            </p>
            <div className='flex gap-2 pb-1 pt-2'>
              <Chip variant='flat'>👨‍💻前端</Chip>
              <Chip variant='flat'>🛠️全栈</Chip>
              <Chip variant='flat'>✨公链</Chip>
              <Chip variant='flat'>⛵️DAO</Chip>
            </div>
            <p className='py-2 text-small text-foreground'>
              ICP生态建设者｜DAO爱好者｜没有群了｜努力挣MBA学费
            </p>
            <div className='w-full text-center mt-4 flex justify-evenly'>
              <FollowButton
                name='Twitter/X'
                href='https://twitter.com/0xkkdemian/'></FollowButton>
              <FollowButton
                name='Youtube'
                href='https://www.youtube.com/@kkdemian'></FollowButton>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
