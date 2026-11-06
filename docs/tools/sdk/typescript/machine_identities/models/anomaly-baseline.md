# AnomalyBaseline

# AnomalyBaseline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uiFeatureName** | **(optional)** `string` | Name of the feature the baseline describes. | [default to undefined]
**windowSize** | **(optional)** `number` | Number of data points in the window. | [default to undefined]
**values** | **(optional)** `Array<number>` | Observed values across the window. | [default to undefined]
**rawValue** | **(optional)** `Array<string>` | Raw observed values across the window. | [default to undefined]
**upperBound** | **(optional)** `Array<number>` | Upper deviation threshold per data point. | [default to undefined]
**lowerBound** | **(optional)** `Array<number>` | Lower deviation threshold per data point. | [default to undefined]
**minimumValue** | **(optional)** `number` | Minimum value in the window. | [default to undefined]
**fprValue** | **(optional)** `number` | False-positive-rate threshold value. | [default to undefined]

