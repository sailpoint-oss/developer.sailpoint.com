# CreateIdentityCollectorV1409Response

# CreateIdentityCollectorV1409Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | Pointer to **string** | Fine-grained error code providing more detail of the error. | [optional] 
**TrackingId** | Pointer to **string** | Unique tracking id for the error. | [optional] 
**Messages** | Pointer to [**[]CreateIdentityCollectorV1409ResponseMessagesInner**](create-identity-collector-v1409-response-messages-inner) | Generic localized reason for error. | [optional] 

## Methods

### NewCreateIdentityCollectorV1409Response

`func NewCreateIdentityCollectorV1409Response() *CreateIdentityCollectorV1409Response`

NewCreateIdentityCollectorV1409Response instantiates a new CreateIdentityCollectorV1409Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateIdentityCollectorV1409ResponseWithDefaults

`func NewCreateIdentityCollectorV1409ResponseWithDefaults() *CreateIdentityCollectorV1409Response`

NewCreateIdentityCollectorV1409ResponseWithDefaults instantiates a new CreateIdentityCollectorV1409Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *CreateIdentityCollectorV1409Response) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *CreateIdentityCollectorV1409Response) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *CreateIdentityCollectorV1409Response) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.

### HasDetailCode

`func (o *CreateIdentityCollectorV1409Response) HasDetailCode() bool`

HasDetailCode returns a boolean if a field has been set.

### GetTrackingId

`func (o *CreateIdentityCollectorV1409Response) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *CreateIdentityCollectorV1409Response) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *CreateIdentityCollectorV1409Response) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *CreateIdentityCollectorV1409Response) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.

### GetMessages

`func (o *CreateIdentityCollectorV1409Response) GetMessages() []CreateIdentityCollectorV1409ResponseMessagesInner`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *CreateIdentityCollectorV1409Response) GetMessagesOk() (*[]CreateIdentityCollectorV1409ResponseMessagesInner, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *CreateIdentityCollectorV1409Response) SetMessages(v []CreateIdentityCollectorV1409ResponseMessagesInner)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *CreateIdentityCollectorV1409Response) HasMessages() bool`

HasMessages returns a boolean if a field has been set.


