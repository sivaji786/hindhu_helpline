<?php

namespace App\Controllers;

use App\Models\UserModel;
use App\Libraries\JWTLibrary;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

class AuthController extends ResourceController
{
    use ResponseTrait;

    protected $userModel;
    protected $jwt;

    public function __construct()
    {
        $this->userModel = new UserModel();
        $this->jwt = new JWTLibrary();
    }

    /**
     * User signup endpoint
     * POST /api/auth/signup
     */
    public function signup()
    {
        try {
            $rules = [
                'name' => 'required|min_length[2]|max_length[100]',
                'surname' => 'required|min_length[2]|max_length[100]',
                'mobile' => 'required|numeric|min_length[10]|max_length[15]|is_unique[users.mobile]',
                'email' => 'required|valid_email|is_unique[users.email]',
                'password' => 'required|min_length[6]',
                'date_of_birth' => 'permit_empty|valid_date',
                'gender' => 'permit_empty|in_list[male,female,other]',
            ];

            if (!$this->validate($rules)) {
                return $this->fail($this->validator->getErrors(), 400);
            }

            $data = [
                'name' => $this->request->getVar('name'),
                'surname' => $this->request->getVar('surname'),
                'mobile' => $this->request->getVar('mobile'),
                'email' => $this->request->getVar('email'),
                'password' => $this->request->getVar('password'),
                'date_of_birth' => $this->request->getVar('date_of_birth'),
                'gender' => $this->request->getVar('gender'),
                'country' => $this->request->getVar('country'),
                'state' => $this->request->getVar('state'),
                'city' => $this->request->getVar('city'),
            ];

            $userId = $this->userModel->insert($data);

            if (!$userId) {
                return $this->fail('Failed to create user', 500);
            }

            // Get the created user
            $user = $this->userModel->find($userId);
            unset($user['password']); // Remove password from response

            // Generate JWT token
            $tokenData = [
                'id' => $user['id'],
                'mobile' => $user['mobile'],
                'email' => $user['email'],
            ];
            $token = $this->jwt->generateToken($tokenData);

            return $this->respondCreated([
                'status' => 'success',
                'message' => 'User registered successfully',
                'data' => [
                    'user' => $user,
                    'token' => $token
                ]
            ]);

        } catch (\Exception $e) {
            log_message('error', 'Signup error: ' . $e->getMessage());
            return $this->fail('An error occurred during registration', 500);
        }
    }

    /**
     * User login endpoint
     * POST /api/auth/login
     */
    public function login()
    {
        try {
            $rules = [
                'mobile' => 'required',
                'password' => 'required',
            ];

            if (!$this->validate($rules)) {
                return $this->fail($this->validator->getErrors(), 400);
            }

            $mobile = $this->request->getVar('mobile');
            $password = $this->request->getVar('password');

            // Find user by mobile
            $user = $this->userModel->findByMobile($mobile);

            if (!$user) {
                return $this->fail('Invalid credentials', 401);
            }

            // Verify password
            if (!$this->userModel->verifyPassword($password, $user['password'])) {
                return $this->fail('Invalid credentials', 401);
            }

            // Remove password from response
            unset($user['password']);

            // Generate JWT token
            $tokenData = [
                'id' => $user['id'],
                'mobile' => $user['mobile'],
                'email' => $user['email'],
            ];
            $token = $this->jwt->generateToken($tokenData);

            return $this->respond([
                'status' => 'success',
                'message' => 'Login successful',
                'data' => [
                    'user' => $user,
                    'token' => $token
                ]
            ]);

        } catch (\Exception $e) {
            log_message('error', 'Login error: ' . $e->getMessage());
            return $this->fail('An error occurred during login', 500);
        }
    }

    /**
     * Get current user profile
     * GET /api/auth/profile
     * Requires JWT token in Authorization header
     */
    public function profile()
    {
        try {
            $authHeader = $this->request->getHeaderLine('Authorization');
            
            if (!$authHeader || !preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
                return $this->fail('No token provided', 401);
            }

            $token = $matches[1];
            $userData = $this->jwt->getUserData($token);

            if (!$userData) {
                return $this->fail('Invalid or expired token', 401);
            }

            $user = $this->userModel->find($userData['id']);
            
            if (!$user) {
                return $this->fail('User not found', 404);
            }

            unset($user['password']);

            return $this->respond([
                'status' => 'success',
                'data' => [
                    'user' => $user
                ]
            ]);

        } catch (\Exception $e) {
            log_message('error', 'Profile error: ' . $e->getMessage());
            return $this->fail('An error occurred', 500);
        }
    }
}
