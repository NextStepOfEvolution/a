import { h, resolveComponent } from 'vue'
import { NIcon } from 'naive-ui'
import {
  BarChartOutline,
  FolderOpenSharp,
  Home,
  Journal,
  List,
  Newspaper,
  Car,
  ChatbubbleEllipses,
  ClipboardOutline,
  Location,
  LocateOutline,
  LanguageSharp,
  Pricetag,
  AlbumsSharp,
  BagHandle
} from '@vicons/ionicons5'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export default [
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'Home'
        }
      },
      { default: () => 'Главная' }
    ),
    key: 'home',
    icon: renderIcon(Home)
    // disabled: true,
  },
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'CategoriesMain'
        }
      },
      { default: () => 'Категории' }
    ),
    key: 'categories',
    icon: renderIcon(List)
  },
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'CategoriesMain'
        }
      },
      { default: () => 'Атрибуты' }
    ),
    key: 'attributes',
    icon: renderIcon(BarChartOutline)
  },
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'CategoriesMain'
        }
      },
      { default: () => 'Товары' }
    ),
    key: 'products',
    icon: renderIcon(AlbumsSharp)
  },
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'CategoriesMain'
        }
      },
      { default: () => 'Бренды' }
    ),
    key: 'brands',
    icon: renderIcon(BagHandle)
  },
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'CategoriesMain'
        }
      },
      { default: () => 'Страницы' }
    ),
    key: 'pages',
    icon: renderIcon(FolderOpenSharp)
  },
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'CategoriesMain'
        }
      },
      { default: () => 'Новости' }
    ),
    key: 'news',
    icon: renderIcon(Journal)
  },
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'CategoriesMain'
        }
      },
      { default: () => 'Статьи' }
    ),
    key: 'articles',
    icon: renderIcon(Newspaper)
  },
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'CategoriesMain'
        }
      },
      { default: () => 'Доставки' }
    ),
    key: 'delivery',
    icon: renderIcon(Car)
  },
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'CategoriesMain'
        }
      },
      { default: () => 'Заказы' }
    ),
    key: 'orders',
    icon: renderIcon(ClipboardOutline)
  },
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'CategoriesMain'
        }
      },
      { default: () => 'Местоположение' }
    ),
    key: 'location',
    icon: renderIcon(Location)
  },
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'CategoriesMain'
        }
      },
      { default: () => 'Сфера деятельности' }
    ),
    key: 'field_of_activity',
    icon: renderIcon(LocateOutline)
  },
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'CategoriesMain'
        }
      },
      { default: () => 'Локализация' }
    ),
    key: 'localization',
    icon: renderIcon(LanguageSharp)
  },
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'CategoriesMain'
        }
      },
      { default: () => 'Обратная связь' }
    ),
    key: 'feedback',
    icon: renderIcon(ChatbubbleEllipses)
  },
  {
    label: () => h(
      resolveComponent('router-link'),
      {
        to: {
          name: 'CategoriesMain'
        }
      },
      { default: () => 'Теги' }
    ),
    key: 'tags',
    icon: renderIcon(Pricetag)
  }
]
