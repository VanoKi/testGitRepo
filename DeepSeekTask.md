Сценарий: "Первый день в команде"
Вы присоединились к проекту awesome-project на GitHub. Вам нужно настроить Git, получить код, внести изменения и отправить их на ревью.

📌 1. Настройка Git (имя и email)  -done
Задача: Представиться Git, чтобы коммиты подписывались вашим именем.
Решение:

bash
git config --global user.name "Ваше Имя"
git config --global user.email "ваш.email@example.com"
Проверка:

bash
git config --list
📌 2. Клонирование репозитория -done
Задача: Получить копию проекта на свой компьютер.
Решение:

bash
git clone https://github.com/team-name/awesome-project.git
cd awesome-project
📌 3. Проверка текущей ветки -done
Задача: Убедиться, что вы в ветке main/master.
Решение:

bash
git branch  # показывает текущую ветку
Если нет:

bash
git checkout main
📌 4. Получение последних изменений -done
Задача: Синхронизироваться с удалённым репозиторием.
Решение:

bash
git pull origin main
📌 5. Создание своей ветки для задачи -done
Задача: Вам поручили исправить баг в авторизации. Создайте ветку.
Решение:

bash
git checkout -b fix/login-bug
📌 6. Внесение изменений в код -done
Задача: Исправить баг в файле auth.py.
Решение:

Откройте файл в редакторе, внесите правки.

Проверьте изменения:

bash
git diff
📌 7. Добавление изменений в staging area
Задача: Подготовить файлы к коммиту.
Решение:

bash
git add auth.py
Проверка:

bash
git status
📌 8. Создание коммита
Задача: Закоммитить исправление.
Решение:

bash
git commit -m "Fix login bug: incorrect redirect"
📌 9. Публикация ветки на GitHub
Задача: Отправить свою ветку в удалённый репозиторий.
Решение:

bash
git push -u origin fix/login-bug
📌 10. Создание Pull Request (PR)
Задача: Отправить код на ревью.
Решение:

Перейдите на GitHub → Pull Requests → New PR.

Выберите:

base: main

compare: fix/login-bug

Напишите описание и создайте PR.

📌 11. Получение изменений из main (если PR не мержится)
Задача: Ваш PR конфликтует с main. Нужно обновить ветку.
Решение:

bash
git checkout main
git pull origin main
git checkout fix/login-bug
git merge main
Или через rebase:

bash
git rebase main
📌 12. Решение конфликтов
Задача: После merge/rebase возник конфликт в auth.py.
Решение:

Откройте файл, найдите <<<<<<<, исправьте конфликт.

Добавьте файл и продолжите:

bash
git add auth.py
git rebase --continue  # или git commit (если merge)
📌 13. Обновление PR после исправлений
Задача: Отправить исправления в существующий PR.
Решение:

bash
git push origin fix/login-bug --force  # если был rebase
📌 14. Просмотр истории коммитов
Задача: Посмотреть, кто и что менял в проекте.
Решение:

bash
git log --oneline --graph --all
📌 15. Временное сохранение изменений (stash)
Задача: Вас просят срочно пофиксить баг, но вы не закончили свою работу.
Решение:

bash
git stash  # прячет текущие изменения
git checkout -b hotfix/header-bug
# ...правим баг, коммитим, пушим...
git checkout fix/login-bug
git stash pop  # возвращаем изменения
📌 16. Отмена локальных изменений
Задача: Вы случайно сломали код и хотите вернуть исходное состояние.
Решение:

bash
git checkout -- auth.py  # отмена изменений в файле
Или для всех файлов:

bash
git reset --hard
📌 17. Возврат к предыдущему коммиту
Задача: Ваш последний коммит сломал проект. Нужно откатиться.
Решение:

bash
git reset --hard HEAD~1  # удаляет последний коммит
📌 18. Работа с тегами (версиями)
Задача: Проект выпускает версию v1.2.0. Нужно создать тег.
Решение:

bash
git tag v1.2.0
git push origin v1.2.0
📌 19. Удаление ветки (локально и на сервере)
Задача: Ваш PR успешно влит в main. Ветка больше не нужна.
Решение:

bash
git checkout main
git branch -d fix/login-bug  # локально
git push origin --delete fix/login-bug  # на сервере
📌 20. Обновление локального main
Задача: После мержа PR убедитесь, что ваш локальный main актуален.
Решение:

bash
git checkout main
git pull origin main
📌 Итог:
Вы прошли полный цикл работы в команде:
✅ Настройка Git → Клонирование → Создание ветки → Правки → Коммит → PR → Мерж.
✅ Работа с конфликтами, stash, тегами, отмена изменений.
