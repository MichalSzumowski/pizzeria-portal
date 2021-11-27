# Dashboard

- `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostepności stolików

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 minut
    - ma przypominać widok tygodnia w kalendrzu Google, gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknieciu rezerwacji lub eventu, przehodzimy na stronę szczegółów

- `/tables/booking/:id` // zmienne fragmenty adresów określamy przez : (dwukropek) oraz nazwę zmiennej w jakiej chcemy zachowywać ten parametr
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmian

- `/tables/booking/new`
  - analogicznie do powyżej, bez poczatkowych informacji

- `/tables/events/:id`
  - analogicznie do powyżej, dla eventów 

- `/tables/events/new`
- analogicznie do powyżej, dla eventów, bez poczatkowych informacji

# Widok kelnera

- `/waiter`
  - tabela
    - w wierszach stoliki
    - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostepne akcje dla danego stolika

- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i cenę)
  - kwotę zamówienia

- `/waiter/order/:id`
  - jak powyższa

# Widok kuchni

- `/kitchen`
  - wyświetlać listę zamówień w kolejności ich złożenia
  - lista musi zawierać:
    - numer stolika (lub zamówienia zdlanego) 
    - pełne informacje dot. zamówionych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane