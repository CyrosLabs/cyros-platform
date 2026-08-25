import React from 'react';
import { Text } from 'react-native';
import { act, create } from 'react-test-renderer';
import { HomeBottomNavigation } from '../src/features/home/components/HomeBottomNavigation';
import { homeData } from '../src/features/home/data/mockHomeData';
import { HomeScreen } from '../src/features/home/screens/HomeScreen';

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
}));

const getTextValue = (value: React.ReactNode): string => {
if (typeof value === 'string' || typeof value === 'number') {
   return String(value);
}

if (Array.isArray(value)) {
   return value.map(getTextValue).join('');
}

return '';
};

const getByText = (tree: ReturnType<typeof create>, text: string) =>
tree.root.findAllByType(Text).find((node) => getTextValue(node.props.children) === text);

const getByLabelText = (tree: ReturnType<typeof create>, label: string) =>
tree.root.findAll((node) => node.props.accessibilityLabel === label)[0];

type TestNode = {
props?: {
   onPress?: () => void;
};
};

const pressNode = (node?: TestNode) => {
if (!node || !node.props || typeof node.props.onPress !== 'function') {
   return;
}

act(() => {
   node.props.onPress?.();
});
};

const renderHomeScreen = (overrides: Partial<React.ComponentProps<typeof HomeScreen>> = {}) => {
  const props: React.ComponentProps<typeof HomeScreen> = {
   data: homeData,
   onNavigate: jest.fn(),
   onOpenNotifications: jest.fn(),
   onOpenSettings: jest.fn(),
   ...overrides,
  };

  let screen: ReturnType<typeof create>;
  act(() => {
   screen = create(<HomeScreen {...props} />);
  });

  return screen!;
};

describe('HomeScreen', () => {
it('renders the home header with current level and streak indicators', () => {
   const screen = renderHomeScreen();

   expect(getByText(screen, 'TOPIK I')).toBeTruthy();
   expect(getByText(screen, 'Level 1')).toBeTruthy();
   expect(getByText(screen, '3 DAYS')).toBeTruthy();
   expect(getByLabelText(screen, 'Streak indicator')).toBeTruthy();
   expect(getByLabelText(screen, 'Premium user indicator')).toBeTruthy();
});

it('renders the roadmap with required learning activities', () => {
   const screen = renderHomeScreen();

   expect(getByText(screen, 'Lesson')).toBeTruthy();
   expect(getByText(screen, 'Grammar')).toBeTruthy();
   expect(getByText(screen, 'Test')).toBeTruthy();
   expect(getByLabelText(screen, 'Start learning')).toBeTruthy();
});

it('renders optional activities as part of the roadmap', () => {
   const screen = renderHomeScreen();

   expect(getByText(screen, 'Hangeul')).toBeTruthy();
   expect(getByText(screen, 'Video')).toBeTruthy();
   expect(getByText(screen, 'Song')).toBeTruthy();
   expect(getByText(screen, 'Story')).toBeTruthy();
});

it('starts the learning flow from the Start action', () => {
   const onNavigate = jest.fn();
   const screen = renderHomeScreen({ onNavigate });

   pressNode(getByLabelText(screen, 'Start learning'));

   expect(onNavigate).toHaveBeenCalledWith('lesson');
});

it('navigates from the roadmap nodes to their destinations', () => {
   const onNavigate = jest.fn();
   const screen = renderHomeScreen({ onNavigate });

   pressNode(getByLabelText(screen, 'Lesson'));
   pressNode(getByLabelText(screen, 'Grammar'));
   pressNode(getByLabelText(screen, 'Test'));

   expect(onNavigate).toHaveBeenCalledWith('lesson');
   expect(onNavigate).toHaveBeenCalledWith('grammar');
   expect(onNavigate).toHaveBeenCalledWith('test');
});
});

describe('HomeBottomNavigation', () => {
it('renders the home, course, favorites, and user tabs', () => {
   const onChangeRoute = jest.fn();
   let nav: ReturnType<typeof create>;
   act(() => {
     nav = create(<HomeBottomNavigation selectedRoute="home" onChangeRoute={onChangeRoute} />);
   });

   expect(getByLabelText(nav!, 'Home tab')).toBeTruthy();
   expect(getByLabelText(nav, 'Course tab')).toBeTruthy();
   expect(getByLabelText(nav, 'Favorites tab')).toBeTruthy();
   expect(getByLabelText(nav, 'User tab')).toBeTruthy();
   expect(getByText(nav, 'Home')).toBeTruthy();
});

it('invokes the selected route when a tab is pressed', () => {
   const onChangeRoute = jest.fn();
   let nav: ReturnType<typeof create>;
   act(() => {
     nav = create(<HomeBottomNavigation selectedRoute="home" onChangeRoute={onChangeRoute} />);
   });

   pressNode(getByLabelText(nav!, 'Course tab'));

   expect(onChangeRoute).toHaveBeenCalledWith('course');
});
});
