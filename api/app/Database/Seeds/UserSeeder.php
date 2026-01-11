<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        $data = [
            [
                'name' => 'Rajesh',
                'surname' => 'Kumar',
                'mobile' => '9876543210',
                'email' => 'rajesh.kumar@example.com',
                'password' => password_hash('password123', PASSWORD_DEFAULT),
                'date_of_birth' => '1985-05-15',
                'gender' => 'male',
                'country' => 'India',
                'state' => 'Maharashtra',
                'city' => 'Mumbai',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'name' => 'Priya',
                'surname' => 'Sharma',
                'mobile' => '9876543211',
                'email' => 'priya.sharma@example.com',
                'password' => password_hash('password123', PASSWORD_DEFAULT),
                'date_of_birth' => '1990-08-22',
                'gender' => 'female',
                'country' => 'India',
                'state' => 'Karnataka',
                'city' => 'Bangalore',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'name' => 'Amit',
                'surname' => 'Patel',
                'mobile' => '9876543212',
                'email' => 'amit.patel@example.com',
                'password' => password_hash('password123', PASSWORD_DEFAULT),
                'date_of_birth' => '1988-03-10',
                'gender' => 'male',
                'country' => 'India',
                'state' => 'Gujarat',
                'city' => 'Ahmedabad',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'name' => 'Lakshmi',
                'surname' => 'Reddy',
                'mobile' => '9876543213',
                'email' => 'lakshmi.reddy@example.com',
                'password' => password_hash('password123', PASSWORD_DEFAULT),
                'date_of_birth' => '1992-11-05',
                'gender' => 'female',
                'country' => 'India',
                'state' => 'Telangana',
                'city' => 'Hyderabad',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'name' => 'Vikram',
                'surname' => 'Singh',
                'mobile' => '9876543214',
                'email' => 'vikram.singh@example.com',
                'password' => password_hash('password123', PASSWORD_DEFAULT),
                'date_of_birth' => '1987-07-18',
                'gender' => 'male',
                'country' => 'India',
                'state' => 'Delhi',
                'city' => 'New Delhi',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ];

        // Insert data
        $this->db->table('users')->insertBatch($data);
    }
}
