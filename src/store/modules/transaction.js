export default {
    state: {
        transactionsOne: [
          {
            id: 1,
            date: '10 июля',
            name: 'ИП Бирюков Михаил Алексеевич',
            score: 'monobank',
            title: 'Сайт Volkswagen',
            description: 'Продвижение',
            body: 'Оплата за продвижение Google Adwords июнь-июль',
            status: 'Оплачено',
            price: '+21 239',
            bool: '+'
          },
          {
            id: 2,
            date: '10 июля',
            name: 'Роман Мельников',
            score: 'monobank',
            title: 'ИП Eltron',
            description: 'Зарплата сотрудникам',
            body: 'Аванс Июль',
            status: 'Оплачено',
            price: '-56 000',
            bool: '-'
          },
          {
            id: 3,
            date: '10 июля',
            name: 'ООО «Кранкомплект»',
            score: 'monobank',
            title: 'Сайт Кранкомплект',
            description: 'Разработка',
            body: 'Аванс за разработку',
            status: 'Оплачено',
            price: '+170 000',
            bool: '+'
          }
        ],
        transactionsTwo: [
          {
            id: 4,
            date: '9 июля',
            name: 'Роман Мельников',
            score: 'monobank',
            title: 'Обучение сотрудников',
            description: 'Расходы на офис',
            body: 'Оплата обучения',
            status: 'Оплачено',
            price: '-8 000',
            bool: '-'
          },
          {
            id: 5,
            date: '9 июля',
            name: 'ООО «Кранкомплект»',
            score: 'monobank',
            title: 'Сайт Кранкомплект',
            description: 'Разработка',
            body: 'Аванс за разработку',
            status: 'Оплачено',
            price: '+170 000',
            bool: '+'
          },
          {
            id: 6,
            date: '9 июля',
            name: 'ИП Бирюков Михаил Алексеевич',
            score: 'monobank',
            title: 'Сайт Volkswagen',
            description: 'Продвижение',
            body: 'Оплата за продвижение Google Adwords июнь-июль',
            status: 'Оплачено',
            price: '+21 239',
            bool: '+'
          },
        ]
    },
  
    getters: {
      TRANSACTIONS_ONE(state)  {
        return state.transactionsOne
      },
      TRANSACTIONS_TWO(state)  {
        return state.transactionsTwo
      }
    }
}