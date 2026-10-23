# OutlierDetected

# OutlierDetected

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**OutlierDetectedIdentity**](outlier-detected-identity) |  | 
**OutlierType** | **string** | Identity's outlier type. | 
**Score** | **float32** | Dissimilarity score that determines whether the identity is an outlier, ranging from `0.0` to `1.0`. The higher the score, the more likely the identity is an outlier. | 

## Methods

### NewOutlierDetected

`func NewOutlierDetected(identity OutlierDetectedIdentity, outlierType string, score float32, ) *OutlierDetected`

NewOutlierDetected instantiates a new OutlierDetected object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutlierDetectedWithDefaults

`func NewOutlierDetectedWithDefaults() *OutlierDetected`

NewOutlierDetectedWithDefaults instantiates a new OutlierDetected object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *OutlierDetected) GetIdentity() OutlierDetectedIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *OutlierDetected) GetIdentityOk() (*OutlierDetectedIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *OutlierDetected) SetIdentity(v OutlierDetectedIdentity)`

SetIdentity sets Identity field to given value.


### GetOutlierType

`func (o *OutlierDetected) GetOutlierType() string`

GetOutlierType returns the OutlierType field if non-nil, zero value otherwise.

### GetOutlierTypeOk

`func (o *OutlierDetected) GetOutlierTypeOk() (*string, bool)`

GetOutlierTypeOk returns a tuple with the OutlierType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutlierType

`func (o *OutlierDetected) SetOutlierType(v string)`

SetOutlierType sets OutlierType field to given value.


### GetScore

`func (o *OutlierDetected) GetScore() float32`

GetScore returns the Score field if non-nil, zero value otherwise.

### GetScoreOk

`func (o *OutlierDetected) GetScoreOk() (*float32, bool)`

GetScoreOk returns a tuple with the Score field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScore

`func (o *OutlierDetected) SetScore(v float32)`

SetScore sets Score field to given value.



