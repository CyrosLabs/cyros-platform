import React from 'react';
import renderer from 'react-test-renderer';
import { HomeScreen } from '../src/features/home/screens/HomeScreen';
import { homeData } from '../src/features/home/data/mockHomeData';

describe('HomeScreen', () => {
  it('renders core home screen sections', () => {
    const tree = renderer
      .create(
        <HomeScreen
          data={homeData}
          onNavigate={jest.fn()}
          onOpenNotifications={jest.fn()}
          onOpenSettings={jest.fn()}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
