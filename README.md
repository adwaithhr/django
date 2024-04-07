# billMate

billMate is a Django-based web application designed to simplify the process of splitting bills among friends. With billMate, you can easily scan the bill and the application utilizes Gemini AI for
Image extraction, classification and ensuring accurate categorization of scanned items. The extracted information is then presented in a structured table format using Django's powerful features. Furthermore,
billMate enables users to send payment requests via Google Pay, facilitating seamless bill settlements between friends.

## Features

- Scan bills and extract text using Gemini AI.
- Automatically identify food items and their respective amounts from scanned bills.
- Store bill information in the database for easy access and management.
- Calculate the split for each friend based on the total bill amount and items consumed.
- Integrate with Google Pay to send payment requests to friends securely.

## Installation

To run billMate locally, follow these steps:

1. Clone the repository:
2. Install dependencies:
3. Set up the database:  
4. Run the development server:
5. Access billMate in your web browser at `http://localhost:8000`.

## Usage

1. Upload your bill using the provided interface.
2. Review the extracted items and amounts.
3. Add the bill to your account and specify the friends who shared the expense.
4. Calculate the split for each friend and send payment requests via Google Pay.
5. Monitor your bills and payment status in the dashboard.

## Contributing

Contributions to billMate are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new pull request.

Please ensure that your code follows the project's coding standards and includes appropriate documentation and tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

