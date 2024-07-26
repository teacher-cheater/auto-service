# Тестовое JS-сервисы.
В рамках тестового задания разработал приложение с использованием Node.js, MongoDB и React. Скриншоты прилагаются.

### Что было сделано:
1. Выбор марки:
  - Создан список ссылок с количеством автомобилей в стоке. Для этого я использовал Collection.aggregate в MongoDB, чтобы получить нужную информацию.

2. Фильтр по моделям:
  - Сделан выпадающий список, где можно выбрать несколько моделей. Этот список обновляется в зависимости от выбранной марки, что делает интерфейс удобным и динамичным.

3. Сток:
  - Таблица с автомобилями отображает следующие данные: ID, марка/модель, модификация, комплектация, стоимость (в удобном формате) и дата создания (тоже отформатированная).
  - Реализована постраничная навигация, показывающая по 20 записей на страницу.

<img width="592" alt="Screenshot_8" src="https://github.com/user-attachments/assets/01be19b0-2ae8-46bc-8587-558b5038419d">
<img width="573" alt="Screenshot_9" src="https://github.com/user-attachments/assets/3c6b2b51-d2e9-4667-ab9f-37acd8e4cc5f">
<img width="569" alt="Screenshot_10" src="https://github.com/user-attachments/assets/28a1d72a-3c2d-42b8-8fc3-ea8dda58f0f1">

### Для того чтобы развернуть приложение на своей машине, следуйте этим шагам:

- git clone git@github.com:teacher-cheater/auto-service.git
- cd auto-service
  
### Установка зависимостей для серверной части
- cd backend
- npm install
  
### Установка зависимостей для клиентской части
- cd ../frontend
- npm install

Убедитесь, что у вас установлен и запущен MongoDB. Создайте конфигурационный файл для подключения к базе данных.
Создайте файл config.js в папке backend со следующим содержимым:

export const mongoUri =
  "mongodb://hrTest:hTy785JbnQ5@mongo0.maximum.expert:27423/?authSource=hrTest&replicaSet=ReplicaSet&readPreference=primary";

Перейдите в директорию backend и запустите сервер:
- cd server
- npm start

Перейдите в директорию frontend и запустите клиентское приложение:
- cd ../client
- npm run dev

### Теперь можно открыть браузер и перейти по адресу http://localhost:3000, чтобы увидеть приложение в действии.
Спасибо :)



