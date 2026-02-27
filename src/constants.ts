import { MenuItem, Order, Conversation } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Black Truffle Linguine',
    description: 'Homemade pasta tossed in a creamy truffle butter sauce, finished with shaved black winter truffles.',
    price: 24.00,
    category: 'Main Course',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn7eZK6FsI1MeNqchTRfZ6JsjXl20pONrJllFJMD51qku1okVzIoH4HUf6swjJHMqzDZkmv36jIOZ-RZOQZ8zFHjTQ30gjbYJ5lfKQPTbBZiTMgAAPXJYQIojQhUIk40Ax3ZNPt2QYeRzqOo1wlNtsJxnAqVUyrr8nGLAKvc0IsrnmiBU2mGQzVXjBkAJVNioFciy2SMK-UgJMkQHIztxb2iq0ZnDvLlyV5Vvq4OXtDhXi9tedYKz044L-JGq1aRqwLXkJfjviSimw',
    tags: ['GF', 'VG'],
    popular: true,
    inventory: 42
  },
  {
    id: '2',
    name: 'Miso Glazed Salmon',
    description: 'Sustainable salmon fillet, honey-miso glaze, charred baby bok choy and ginger-infused jasmine rice.',
    price: 32.00,
    category: 'Main Course',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSHM0VwWNEbUNmTutBquD_MGYhCrt6mEvssk6ZrCdBsLGDbcLKG_hWFJ6N1ZMPyuGqdhIFkX0HwXtrFegc0X2bUUOmojDs0tqMnHt9xyTs7V1qXwMwVLaAhTuqqod9dlCUrFgftM4UckxsE_1F8nV2pisvbo3ZNKdC05ryanyCEbw_SIRXHaF1Sb5aWY2N85rsut2p3J7Q3hicBmBgClg6vTG0zLYLXErrN5Pt8o-IQCYSkMCKyz1ZW-CnhRQtyzVFsIYR_7cIupeH',
    tags: ['DF'],
    inventory: 15
  },
  {
    id: '3',
    name: 'Gusto Superbowl',
    description: 'Quinoa, hass avocado, roasted sweet potato, kale, pomegranate seeds, and a zesty lemon-tahini dressing.',
    price: 19.00,
    category: 'Vegan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7rndYj4P_v4IpKSOPQqRX-dmx8ts7U-An-jvrr6QaPZMl3c94TUymDtbdImkjM4FuvcpDFKmKFdYYd5JFINBCfRaj5QIDeQWa2RFaq2CqU_6MiOdGWYRDD9lRvwRKUXz54CPhwOVRiisR2rsHqKtkW0aZRVWlhXm_hRY61pwFpWNVYXDl1cws7r6yocj2MkyF7wPgV4l0yEg8OCYMweAD8eGrzW20NBDZGE5bhXxJPBhDHBek4GZuet6pzFtA6Vmt-n1ZYlBpT24x',
    tags: ['V', 'GF'],
    inventory: 25
  },
  {
    id: '4',
    name: 'Truffle Risotto',
    description: 'Creamy arborio rice with black truffle shavings, aged parmesan, and a drizzle of white truffle oil.',
    price: 24.00,
    category: 'Main Course',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUdlZZhfbHtJc3mFfNm-Gm_Mv8eKa6DCSDyotwrgG1YJDrpLnR5g3dhTbqDsLwC2RLpv-Gb6eeq00cchfBbAUQRse0F9dFXfkBo1PjufDbqi8oJMR77NyJOI76W6OnTlBPsFHgkL7vmXkoRy7WDNg_bKbJSA-u9goXhGfetvPwBgi17Mh4B_51gkV2rfwwKbTPXd_hmOcTWn4z7ik18ce1rBdQhSFiuVgLBaXkZcXsEWJPIk9GhWd3kFlZc_ohjy4oNmWeSuxKcUyH',
    popular: true,
    inventory: 30
  },
  {
    id: '5',
    name: 'Wagyu Burger',
    description: 'Premium wagyu beef patty with caramelized onions, swiss cheese, and our secret sauce on brioche.',
    price: 22.00,
    category: 'Main Course',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYZWaG1AbVixAv8zFANqFtSvP5GkV5HckPrhFFygGszJUmaeJjZgmALrKroIszGsLbrXumSBuDDw3VWlna2Y7Ilt2u5gbIUSZtZ5xKP_75mhbaxZgjfBoNTReMNcxs1mIQxYZXvonq75qfb0rujxpm7CW44IzpOvcXaecqQxafb7ZcsUGXWyWDsp8ua98JRy9to8jKYTOiHEYMclks5IfqjxY0qkAWjTRXm4Cff48GcOAFclHRyOzFo8PsprGizmmhmBqoL-DmJ-uF',
    chefSpecial: true,
    inventory: 20
  }
];

export const RECENT_ORDERS: Order[] = [
  {
    id: '#ORD-2541',
    customer: {
      name: 'Sarah Jenkins',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE9xVkeR7I_HyfTWGLFn6-dT3iFOTCfGjSeQWpkDvIfILnbtWHzjPZRuqxggI3QHnqmoU020wWLwCCrteSDbhOFV_idWbCpZMsyHs1AXAz8fqReWu0YaSnGiMXPKGl9WpcZLcypFjpgWJSUVY5nEb-_j0DK_RshoLBMFpdGadoMwqSXyo5PvZN-H_cCU-OB4Leo5_bKCidqs_RR6E6wdwBH3mfuwOsUH-U79JQGjaIjtVmW7eZzALGOKszH9b2jQmgyi8BzPal-WCT',
      email: 'sarah.j@email.com'
    },
    items: [{ menuItemId: '1', quantity: 3, name: 'Black Truffle Linguine', price: 24.00 }],
    total: 84.50,
    status: 'Preparing',
    timestamp: '2 mins ago'
  },
  {
    id: '#ORD-2540',
    customer: {
      name: 'Robert Fox',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6BiyeeT8u-AJmf0WT7N3WmSNKiU1QYfiqM-3fnlThUSaELpkf8tWY6gswAcpUUTHmwVFknMdHP3tBjKvx3ZQFD1jyo8UTqoTzt4ggtPJs0s6-VtMKKoYzhPb7s2l2EuFtHovb4Dy1qkYgf9xea-JcGLTSGcT2nSNduZ4kjzYDqLWyULO66_xrBdLGCcPFgoazDeQ6th7x94JMUi6uatKNNKmzXFKgLZ7Pkd3Uv4R8Rurp27e0-vBFJ_MvVOh9by_Ympd8O5JQZuX0',
      email: 'robert.f@email.com'
    },
    items: [{ menuItemId: '2', quantity: 1, name: 'Miso Glazed Salmon', price: 32.00 }],
    total: 22.00,
    status: 'Delivered',
    timestamp: '12 mins ago'
  }
];

export const CONVERSATIONS: Conversation[] = [
  {
    id: '1',
    customer: {
      name: 'Sarah Johnson',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdyTbszoN1UIAqJ425OnLwGlD4sg_rOicPefNkJsZi5VAr3J615lhZ_yKHTzh1LLOwjLx-_FzN3-Fm6852mYNv24I7NtR5FfKqrleXFv0LISq49NNwWQFSeBR1GytYnfur77W6YEMRlNrkmKeZxITN78oJAh3IC8TBr4d74K6KGzOWK5Dj-bTl0UAbhrB_3Rfp1AO9rOl-DTzI0jQf76D_0aNpZTg5Ycrxv-Urb1YMk6q_qKfRlZzIaKhj4IYNzuNp9UduxJG1dqh7',
      email: 'sarah.j@email.com',
      table: 'Table #4',
      isVIP: true
    },
    lastMessage: "Waitress, I'd like to change my order...",
    timestamp: '2m ago',
    status: 'AI Active',
    messages: [
      { id: 'm1', sender: 'user', text: 'Hi! I just ordered the Truffle Pasta, but I forgot to mention I have a walnut allergy. Is that an ingredient?', timestamp: '12:46 PM' },
      { id: 'm2', sender: 'ai', text: 'Hello Sarah! Our Truffle Pasta does not contain walnuts. However, it is prepared in a kitchen that handles nuts. Would you like me to notify the chef to ensure extra precautions are taken?', timestamp: '12:46 PM' },
      { id: 'm3', sender: 'user', text: 'Yes, please! That would be great. Also, can I add a glass of Pinot Noir to my order?', timestamp: '12:47 PM' }
    ]
  }
];
