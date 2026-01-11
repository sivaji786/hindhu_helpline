const API_BASE_URL = 'http://localhost:8080/api';

export interface SignupData {
    name: string;
    surname: string;
    mobile: string;
    email: string;
    password: string;
    date_of_birth?: string;
    gender?: 'male' | 'female' | 'other';
    country?: string;
    state?: string;
    city?: string;
}

export interface LoginData {
    mobile: string;
    password: string;
}

export interface User {
    id: number;
    name: string;
    surname: string;
    mobile: string;
    email: string;
    date_of_birth?: string;
    gender?: string;
    country?: string;
    state?: string;
    city?: string;
    created_at: string;
    updated_at: string;
}

export interface AuthResponse {
    status: string;
    message: string;
    data: {
        user: User;
        token: string;
    };
}

export interface ApiError {
    status: string;
    message: string;
    messages?: Record<string, string>;
}

class ApiService {
    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const url = `${API_BASE_URL}${endpoint}`;

        const config: RequestInit = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        };

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw data;
            }

            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    async signup(data: SignupData): Promise<AuthResponse> {
        return this.request<AuthResponse>('/auth/signup', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async login(data: LoginData): Promise<AuthResponse> {
        return this.request<AuthResponse>('/auth/login', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async getProfile(token: string): Promise<{ status: string; data: { user: User } }> {
        return this.request('/auth/profile', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}

export const api = new ApiService();

// Token management helpers
export const tokenManager = {
    setToken(token: string) {
        localStorage.setItem('auth_token', token);
    },

    getToken(): string | null {
        return localStorage.getItem('auth_token');
    },

    removeToken() {
        localStorage.removeItem('auth_token');
    },

    setUser(user: User) {
        localStorage.setItem('user', JSON.stringify(user));
    },

    getUser(): User | null {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    removeUser() {
        localStorage.removeItem('user');
    },

    logout() {
        this.removeToken();
        this.removeUser();
    },
};
