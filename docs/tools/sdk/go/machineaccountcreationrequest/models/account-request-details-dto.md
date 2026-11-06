# AccountRequestDetailsDto

# AccountRequestDetailsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountRequestId** | Pointer to **string** | Account request ID. | [optional] 
**RequestType** | Pointer to **string** | Type of the account request. | [optional] 
**CreatedAt** | Pointer to **SailPointTime** | Machine account creation request creation date and time. | [optional] [readonly] 
**CompletedAt** | Pointer to **NullableTime** | Machine account creation request completion date and time. | [optional] [readonly] 
**OverallStatus** | Pointer to **string** | Overall status of the creation request. | [optional] 
**Requester** | Pointer to [**AccountRequestDetailsDtoRequester**](account-request-details-dto-requester) |  | [optional] 
**AccountRequestPhases** | Pointer to [**[]AccountRequestPhase**](account-request-phase) | List of account request phases. | [optional] 
**ErrorDetails** | Pointer to **NullableString** | Detailed error information. | [optional] 

## Methods

### NewAccountRequestDetailsDto

`func NewAccountRequestDetailsDto() *AccountRequestDetailsDto`

NewAccountRequestDetailsDto instantiates a new AccountRequestDetailsDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountRequestDetailsDtoWithDefaults

`func NewAccountRequestDetailsDtoWithDefaults() *AccountRequestDetailsDto`

NewAccountRequestDetailsDtoWithDefaults instantiates a new AccountRequestDetailsDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountRequestId

`func (o *AccountRequestDetailsDto) GetAccountRequestId() string`

GetAccountRequestId returns the AccountRequestId field if non-nil, zero value otherwise.

### GetAccountRequestIdOk

`func (o *AccountRequestDetailsDto) GetAccountRequestIdOk() (*string, bool)`

GetAccountRequestIdOk returns a tuple with the AccountRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountRequestId

`func (o *AccountRequestDetailsDto) SetAccountRequestId(v string)`

SetAccountRequestId sets AccountRequestId field to given value.

### HasAccountRequestId

`func (o *AccountRequestDetailsDto) HasAccountRequestId() bool`

HasAccountRequestId returns a boolean if a field has been set.

### GetRequestType

`func (o *AccountRequestDetailsDto) GetRequestType() string`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *AccountRequestDetailsDto) GetRequestTypeOk() (*string, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *AccountRequestDetailsDto) SetRequestType(v string)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *AccountRequestDetailsDto) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### GetCreatedAt

`func (o *AccountRequestDetailsDto) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *AccountRequestDetailsDto) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *AccountRequestDetailsDto) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *AccountRequestDetailsDto) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetCompletedAt

`func (o *AccountRequestDetailsDto) GetCompletedAt() SailPointTime`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *AccountRequestDetailsDto) GetCompletedAtOk() (*SailPointTime, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *AccountRequestDetailsDto) SetCompletedAt(v SailPointTime)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *AccountRequestDetailsDto) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.

### SetCompletedAtNil

`func (o *AccountRequestDetailsDto) SetCompletedAtNil(b bool)`

 SetCompletedAtNil sets the value for CompletedAt to be an explicit nil

### UnsetCompletedAt
`func (o *AccountRequestDetailsDto) UnsetCompletedAt()`

UnsetCompletedAt ensures that no value is present for CompletedAt, not even an explicit nil
### GetOverallStatus

`func (o *AccountRequestDetailsDto) GetOverallStatus() string`

GetOverallStatus returns the OverallStatus field if non-nil, zero value otherwise.

### GetOverallStatusOk

`func (o *AccountRequestDetailsDto) GetOverallStatusOk() (*string, bool)`

GetOverallStatusOk returns a tuple with the OverallStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverallStatus

`func (o *AccountRequestDetailsDto) SetOverallStatus(v string)`

SetOverallStatus sets OverallStatus field to given value.

### HasOverallStatus

`func (o *AccountRequestDetailsDto) HasOverallStatus() bool`

HasOverallStatus returns a boolean if a field has been set.

### GetRequester

`func (o *AccountRequestDetailsDto) GetRequester() AccountRequestDetailsDtoRequester`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *AccountRequestDetailsDto) GetRequesterOk() (*AccountRequestDetailsDtoRequester, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *AccountRequestDetailsDto) SetRequester(v AccountRequestDetailsDtoRequester)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *AccountRequestDetailsDto) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetAccountRequestPhases

`func (o *AccountRequestDetailsDto) GetAccountRequestPhases() []AccountRequestPhase`

GetAccountRequestPhases returns the AccountRequestPhases field if non-nil, zero value otherwise.

### GetAccountRequestPhasesOk

`func (o *AccountRequestDetailsDto) GetAccountRequestPhasesOk() (*[]AccountRequestPhase, bool)`

GetAccountRequestPhasesOk returns a tuple with the AccountRequestPhases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountRequestPhases

`func (o *AccountRequestDetailsDto) SetAccountRequestPhases(v []AccountRequestPhase)`

SetAccountRequestPhases sets AccountRequestPhases field to given value.

### HasAccountRequestPhases

`func (o *AccountRequestDetailsDto) HasAccountRequestPhases() bool`

HasAccountRequestPhases returns a boolean if a field has been set.

### GetErrorDetails

`func (o *AccountRequestDetailsDto) GetErrorDetails() string`

GetErrorDetails returns the ErrorDetails field if non-nil, zero value otherwise.

### GetErrorDetailsOk

`func (o *AccountRequestDetailsDto) GetErrorDetailsOk() (*string, bool)`

GetErrorDetailsOk returns a tuple with the ErrorDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDetails

`func (o *AccountRequestDetailsDto) SetErrorDetails(v string)`

SetErrorDetails sets ErrorDetails field to given value.

### HasErrorDetails

`func (o *AccountRequestDetailsDto) HasErrorDetails() bool`

HasErrorDetails returns a boolean if a field has been set.

### SetErrorDetailsNil

`func (o *AccountRequestDetailsDto) SetErrorDetailsNil(b bool)`

 SetErrorDetailsNil sets the value for ErrorDetails to be an explicit nil

### UnsetErrorDetails
`func (o *AccountRequestDetailsDto) UnsetErrorDetails()`

UnsetErrorDetails ensures that no value is present for ErrorDetails, not even an explicit nil

