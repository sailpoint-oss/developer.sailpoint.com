# AnomalyBaseline

# AnomalyBaseline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UiFeatureName** | Pointer to **string** | Name of the feature the baseline describes. | [optional] 
**WindowSize** | Pointer to **int32** | Number of data points in the window. | [optional] 
**Values** | Pointer to **[]int32** | Observed values across the window. | [optional] 
**RawValue** | Pointer to **[]string** | Raw observed values across the window. | [optional] 
**UpperBound** | Pointer to **[]float64** | Upper deviation threshold per data point. | [optional] 
**LowerBound** | Pointer to **[]float64** | Lower deviation threshold per data point. | [optional] 
**MinimumValue** | Pointer to **int32** | Minimum value in the window. | [optional] 
**FprValue** | Pointer to **float64** | False-positive-rate threshold value. | [optional] 

## Methods

### NewAnomalyBaseline

`func NewAnomalyBaseline() *AnomalyBaseline`

NewAnomalyBaseline instantiates a new AnomalyBaseline object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAnomalyBaselineWithDefaults

`func NewAnomalyBaselineWithDefaults() *AnomalyBaseline`

NewAnomalyBaselineWithDefaults instantiates a new AnomalyBaseline object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUiFeatureName

`func (o *AnomalyBaseline) GetUiFeatureName() string`

GetUiFeatureName returns the UiFeatureName field if non-nil, zero value otherwise.

### GetUiFeatureNameOk

`func (o *AnomalyBaseline) GetUiFeatureNameOk() (*string, bool)`

GetUiFeatureNameOk returns a tuple with the UiFeatureName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUiFeatureName

`func (o *AnomalyBaseline) SetUiFeatureName(v string)`

SetUiFeatureName sets UiFeatureName field to given value.

### HasUiFeatureName

`func (o *AnomalyBaseline) HasUiFeatureName() bool`

HasUiFeatureName returns a boolean if a field has been set.

### GetWindowSize

`func (o *AnomalyBaseline) GetWindowSize() int32`

GetWindowSize returns the WindowSize field if non-nil, zero value otherwise.

### GetWindowSizeOk

`func (o *AnomalyBaseline) GetWindowSizeOk() (*int32, bool)`

GetWindowSizeOk returns a tuple with the WindowSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWindowSize

`func (o *AnomalyBaseline) SetWindowSize(v int32)`

SetWindowSize sets WindowSize field to given value.

### HasWindowSize

`func (o *AnomalyBaseline) HasWindowSize() bool`

HasWindowSize returns a boolean if a field has been set.

### GetValues

`func (o *AnomalyBaseline) GetValues() []int32`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *AnomalyBaseline) GetValuesOk() (*[]int32, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *AnomalyBaseline) SetValues(v []int32)`

SetValues sets Values field to given value.

### HasValues

`func (o *AnomalyBaseline) HasValues() bool`

HasValues returns a boolean if a field has been set.

### GetRawValue

`func (o *AnomalyBaseline) GetRawValue() []string`

GetRawValue returns the RawValue field if non-nil, zero value otherwise.

### GetRawValueOk

`func (o *AnomalyBaseline) GetRawValueOk() (*[]string, bool)`

GetRawValueOk returns a tuple with the RawValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRawValue

`func (o *AnomalyBaseline) SetRawValue(v []string)`

SetRawValue sets RawValue field to given value.

### HasRawValue

`func (o *AnomalyBaseline) HasRawValue() bool`

HasRawValue returns a boolean if a field has been set.

### GetUpperBound

`func (o *AnomalyBaseline) GetUpperBound() []float64`

GetUpperBound returns the UpperBound field if non-nil, zero value otherwise.

### GetUpperBoundOk

`func (o *AnomalyBaseline) GetUpperBoundOk() (*[]float64, bool)`

GetUpperBoundOk returns a tuple with the UpperBound field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpperBound

`func (o *AnomalyBaseline) SetUpperBound(v []float64)`

SetUpperBound sets UpperBound field to given value.

### HasUpperBound

`func (o *AnomalyBaseline) HasUpperBound() bool`

HasUpperBound returns a boolean if a field has been set.

### GetLowerBound

`func (o *AnomalyBaseline) GetLowerBound() []float64`

GetLowerBound returns the LowerBound field if non-nil, zero value otherwise.

### GetLowerBoundOk

`func (o *AnomalyBaseline) GetLowerBoundOk() (*[]float64, bool)`

GetLowerBoundOk returns a tuple with the LowerBound field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLowerBound

`func (o *AnomalyBaseline) SetLowerBound(v []float64)`

SetLowerBound sets LowerBound field to given value.

### HasLowerBound

`func (o *AnomalyBaseline) HasLowerBound() bool`

HasLowerBound returns a boolean if a field has been set.

### GetMinimumValue

`func (o *AnomalyBaseline) GetMinimumValue() int32`

GetMinimumValue returns the MinimumValue field if non-nil, zero value otherwise.

### GetMinimumValueOk

`func (o *AnomalyBaseline) GetMinimumValueOk() (*int32, bool)`

GetMinimumValueOk returns a tuple with the MinimumValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumValue

`func (o *AnomalyBaseline) SetMinimumValue(v int32)`

SetMinimumValue sets MinimumValue field to given value.

### HasMinimumValue

`func (o *AnomalyBaseline) HasMinimumValue() bool`

HasMinimumValue returns a boolean if a field has been set.

### GetFprValue

`func (o *AnomalyBaseline) GetFprValue() float64`

GetFprValue returns the FprValue field if non-nil, zero value otherwise.

### GetFprValueOk

`func (o *AnomalyBaseline) GetFprValueOk() (*float64, bool)`

GetFprValueOk returns a tuple with the FprValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFprValue

`func (o *AnomalyBaseline) SetFprValue(v float64)`

SetFprValue sets FprValue field to given value.

### HasFprValue

`func (o *AnomalyBaseline) HasFprValue() bool`

HasFprValue returns a boolean if a field has been set.


