# Hindu Helpline Application

A modern web application for the Global Hindu Help Line organization, built with React and CodeIgniter 4.

![Login Page](login.png)

## 🌟 Features

### Authentication
- **Beautiful Login Page** - Designed to match brand guidelines with split-screen layout
- **JWT Authentication** - Secure token-based authentication
- **Session Persistence** - Auto-login on page refresh

### Dashboard
- **User Statistics** - Real-time metrics for members, cases, and requests
- **Activity Feed** - Recent activity tracking with color-coded events
- **Quick Actions** - Easy access to common tasks
- **Responsive Design** - Works seamlessly on all devices

### User Management
- **User Registration** - Multi-step signup flow
- **Profile Management** - Complete user profile system
- **Role-Based Access** - Secure access control

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **CodeIgniter 4** - PHP framework
- **MySQL** - Database
- **JWT** - Authentication tokens
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- PHP 8.1+
- MySQL 5.7+
- Composer

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
# Navigate to API directory
cd api

# Install PHP dependencies
composer install

# Copy environment file
cp env .env

# Configure database in .env
# database.default.hostname = localhost
# database.default.database = your_database
# database.default.username = your_username
# database.default.password = your_password

# Run migrations
php spark migrate

# Seed sample data
php spark db:seed UserSeeder

# Start development server
php spark serve
```

The backend will run on `http://localhost:8080`

## 🔑 Test Credentials

After seeding the database, you can login with:

| Name | Mobile | Password |
|------|--------|----------|
| Rajesh Kumar | 9876543210 | password123 |
| Priya Sharma | 9876543211 | password123 |
| Amit Patel | 9876543212 | password123 |
| Lakshmi Reddy | 9876543213 | password123 |
| Vikram Singh | 9876543214 | password123 |

## 📁 Project Structure

```
.
├── src/                    # Frontend source code
│   ├── app/               # React components
│   │   ├── components/    # Reusable components
│   │   │   ├── common/   # Common UI components
│   │   │   └── ui/       # shadcn/ui components
│   │   ├── App.tsx       # Main app component
│   │   └── Dashboard.tsx # Dashboard component
│   ├── services/         # API services
│   ├── styles/           # CSS styles
│   └── assets/           # Images and static files
│
├── api/                   # Backend source code
│   ├── app/
│   │   ├── Controllers/  # API controllers
│   │   ├── Models/       # Database models
│   │   ├── Libraries/    # Custom libraries (JWT)
│   │   ├── Database/
│   │   │   ├── Migrations/ # Database migrations
│   │   │   └── Seeds/      # Database seeders
│   │   └── Config/       # Configuration files
│   └── public/           # Public web directory
│
└── guidelines/           # Project guidelines
```

## 🎨 Design System

### Colors
- **Primary Orange**: `#FF9933`
- **Primary Orange Hover**: `#e68a2e`

### Typography
- **Headings**: Bold, varying sizes
- **Body**: 14px base size
- **Small Text**: 13px

## 🔧 Development

### Frontend Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend Commands

```bash
php spark serve              # Start development server
php spark migrate            # Run migrations
php spark migrate:rollback   # Rollback migrations
php spark db:seed UserSeeder # Seed database
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (requires JWT)

## 📝 Environment Variables

### Frontend (.env)
```env
VITE_API_URL=http://localhost:8080
```

### Backend (api/.env)
```env
CI_ENVIRONMENT = development

database.default.hostname = localhost
database.default.database = your_database
database.default.username = your_username
database.default.password = your_password
database.default.DBDriver = MySQLi

JWT_SECRET = your-secret-key-here
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- **Sivaji** - Initial work

## 🙏 Acknowledgments

- Global Hindu Help Line organization
- All contributors and supporters

---

**Note**: This is a development version. For production deployment, ensure proper security measures, environment configurations, and server optimizations are in place.