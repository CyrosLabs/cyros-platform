import React from 'react';
import { render } from '@testing-library/react-native';
import { CourseLessonNode } from '../src/features/home/components/CourseLessonNode';

const lesson = {
  id: '1',
  number: 1,
  title: 'Vocab',
  type: 'vocabulary' as const,
  status: 'completed' as const,
  stars: 3,
};

describe('CourseLessonNode', () => {
  it('renders a completed lesson', async () => {
    const { getByText } = await render(
      <CourseLessonNode
        lesson={lesson}
        isCurrent={false}
      />
    );

    expect(getByText('Vocab')).toBeTruthy();
  });

  it('renders the completion indicator', async () => {
    const { getByText } = await render(
      <CourseLessonNode
        lesson={lesson}
        isCurrent={false}
      />
    );

    expect(getByText('✓')).toBeTruthy();
  });
});