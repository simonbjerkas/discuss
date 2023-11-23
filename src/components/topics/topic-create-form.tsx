'use client';

import { useFormState } from 'react-dom';
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import FormButton from '@/components/common/form-button';
import * as actions from '@/actions';

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });

  return (
    <Popover placement='top-end'>
      <PopoverTrigger>
        <Button color='primary'>Create a topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3 className='text-lg'>Create a topic</h3>
            <Input
              name='name'
              label='Name'
              labelPlacement='outside'
              placeholder='Name'
              isInvalid={!!formState.errors?.name}
              errorMessage={formState.errors?.name?.join(', ')}
            />
            <Textarea
              name='description'
              label='Description'
              labelPlacement='outside'
              placeholder='Descripe your topic'
              isInvalid={!!formState.errors?.description}
              errorMessage={formState.errors?.description?.join(', ')}
            />
            {formState.errors?._form ? (
              <div className='p-2 bg-red-100 rounded-lg text-red-600'>
                {formState.errors._form.join(', ')}
              </div>
            ) : null}
            <FormButton>Submit</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
