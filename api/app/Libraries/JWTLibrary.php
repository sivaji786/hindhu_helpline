<?php

namespace App\Libraries;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Exception;

class JWTLibrary
{
    private $key;
    private $algorithm = 'HS256';

    public function __construct()
    {
        // Use app key from .env or generate a secure key
        $this->key = getenv('JWT_SECRET_KEY') ?: 'your-secret-key-change-this-in-production';
    }

    /**
     * Generate JWT token
     *
     * @param array $data User data to encode in token
     * @param int $expiry Token expiry time in seconds (default 24 hours)
     * @return string JWT token
     */
    public function generateToken(array $data, int $expiry = 86400): string
    {
        $issuedAt = time();
        $expire = $issuedAt + $expiry;

        $payload = [
            'iat' => $issuedAt,
            'exp' => $expire,
            'data' => $data
        ];

        return JWT::encode($payload, $this->key, $this->algorithm);
    }

    /**
     * Decode and validate JWT token
     *
     * @param string $token JWT token to decode
     * @return object|null Decoded token data or null if invalid
     */
    public function decodeToken(string $token): ?object
    {
        try {
            $decoded = JWT::decode($token, new Key($this->key, $this->algorithm));
            return $decoded;
        } catch (Exception $e) {
            log_message('error', 'JWT decode error: ' . $e->getMessage());
            return null;
        }
    }

    /**
     * Validate JWT token
     *
     * @param string $token JWT token to validate
     * @return bool True if valid, false otherwise
     */
    public function validateToken(string $token): bool
    {
        return $this->decodeToken($token) !== null;
    }

    /**
     * Extract user data from token
     *
     * @param string $token JWT token
     * @return array|null User data or null if invalid
     */
    public function getUserData(string $token): ?array
    {
        $decoded = $this->decodeToken($token);
        
        if ($decoded && isset($decoded->data)) {
            return (array) $decoded->data;
        }
        
        return null;
    }
}
