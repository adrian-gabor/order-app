# Food Order Application

Aplikacja do zamawiania jedzenia online zbudowana przy użyciu React.js i Node.js.

## Funkcjonalności

- Przeglądanie menu dostępnych dań
- Dodawanie produktów do koszyka
- Modyfikacja ilości produktów w koszyku
- Formularz zamówienia z danymi dostawy
- System zarządzania stanem koszyka
- Responsywny interfejs użytkownika
- Komunikacja z backend API

## Technologie

### Frontend
- React.js
- Context API do zarządzania stanem
- Custom Hooks
- React Portals do modali
- Fetch API do komunikacji z backendem

### Backend
- Node.js
- Express.js
- System przechowywania danych w plikach JSON

## Struktura Projektu

```
food-app/
├── src/
│   ├── components/
│   │   ├── UI/          # Komponenty interfejsu użytkownika
│   │   ├── Meals.jsx    # Lista dostępnych dań
│   │   ├── MealItem.jsx # Pojedyncze danie
│   │   └── Header.jsx   # Nagłówek aplikacji
│   ├── store/
│   │   ├── CartContext.jsx      # Kontekst koszyka
│   │   └── UserProgressContext.jsx  # Kontekst postępu użytkownika
│   ├── hooks/
│   │   └── useHttp.js   # Hook do komunikacji HTTP
│   └── util/
│       └── formatting.js # Funkcje pomocnicze
├── backend/
│   ├── data/
│   │   ├── available-meals.json
│   │   └── orders.json
│   └── app.js
└── public/
    └── images/          # Zdjęcia dań
```

## Instalacja i Uruchomienie

1. Sklonuj repozytorium:
\`\`\`bash
git clone [URL_repozytorium]
\`\`\`

2. Zainstaluj zależności dla frontendu:
\`\`\`bash
cd food-app
npm install
\`\`\`

3. Zainstaluj zależności dla backendu:
\`\`\`bash
cd backend
npm install
\`\`\`

4. Uruchom backend (w folderze backend):
\`\`\`bash
npm run start
\`\`\`

5. Uruchom frontend (w głównym folderze):
\`\`\`bash
npm run dev
\`\`\`

## Dostępne Endpointy API

- `GET /meals` - pobiera listę dostępnych dań
- `POST /orders` - składa nowe zamówienie

## Funkcje

### Koszyk
- Dodawanie produktów
- Usuwanie produktów
- Wyświetlanie sumy zamówienia
- Czyszczenie koszyka po złożeniu zamówienia

### Checkout
- Formularz z danymi dostawy
- Walidacja danych
- Potwierdzenie zamówienia
- Modal z potwierdzeniem sukcesu

## Autor

Adrian Gabor

## Licencja

Ten projekt jest dostępny na licencji MIT.
