
# MMM-RandomDachsundOrCatQuotes

MMM-RandomDachsundOrCatQuotes is a Magic Mirror module that displays random quotes about dachshunds, cats, or both. It fetches quotes from a JSON file and allows customization of the displayed quotes and refresh rate.

## Installation

1. Navigate to the `modules` directory of your Magic Mirror installation:

   ```
   cd ~/MagicMirror/modules
   ```

2. Clone this repository:

   ```
   git clone <repository_url>
   ```

3. Install dependencies:

   ```
   npm install
   ```

## Configuration

To use MMM-RandomDachsundOrCatQuotes, add the following configuration to the `config/config.js` file of your Magic Mirror installation:

```javascript
{
  module: "MMM-RandomDachsundOrCatQuotes",
  position: "lower_third",
  config: {
    category: "both", // Options: "dachshund", "cat", "both"
    refreshRateHours: 1 // Refresh rate in hours
  }
},
```

### Configuration Options

- `category`: Specifies the category of quotes to display. Options are "dachshund" (quotes about dachshunds), "cat" (quotes about cats), or "both" (random quotes from both categories). Default is "both".
- `refreshRateHours`: Specifies the refresh rate for loading new quotes, in hours. Default is 1 hour.


## Credits

This module was created by Will Shearer. It is inspired by the Magic Mirror project (https://magicmirror.builders/).

## License

This project is licensed under the MIT License.
