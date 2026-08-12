import React from 'react';
import renderer from 'react-test-renderer';
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
  it('renders completed lesson state', () => {
    const tree = renderer.create(<CourseLessonNode lesson={lesson} isCurrent={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
