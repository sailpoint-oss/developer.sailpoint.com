# AccountActionRequestDto

# AccountActionRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountRequestId** | Pointer to **string** | Account requester ID. | [optional] 
**RequestType** | Pointer to **string** | Access item requester's identity ID. | [optional] 
**CreatedAt** | Pointer to **SailPointTime** | Creation date and time of account deletion request date. | [optional] [readonly] 
**CompletedAt** | Pointer to **SailPointTime** | Account deletion request completion date and time. | [optional] [readonly] 
**OverallStatus** | Pointer to **string** | Overall status of deletion request. | [optional] 
**Requester** | Pointer to [**AccountActionRequestDtoRequester**](account-action-request-dto-requester) |  | [optional] 
**RequesterComments** | Pointer to **string** | Comments added by the requester while creating the account deletion request. | [optional] 
**AccountDetails** | Pointer to [**AccountActionRequestDtoAccountDetails**](account-action-request-dto-account-details) |  | [optional] 
**CorrelatedIdentity** | Pointer to [**AccountActionRequestDtoCorrelatedIdentity**](account-action-request-dto-correlated-identity) |  | [optional] 
**ManagerReference** | Pointer to [**NullableIdentityReference**](identity-reference) |  | [optional] 
**ApprovalRequestId** | Pointer to **string** | ID of the approval request associated with the account deletion action. | [optional] 
**AccountRequestPhases** | Pointer to [**[]AccountRequestPhase**](account-request-phase) | List of account request phases. | [optional] 
**ApprovalDetails** | Pointer to [**[]ApprovalDetails**](approval-details) | List approval details | [optional] 
**ErrorDetails** | Pointer to **NullableString** | Detailed error information. | [optional] 

## Methods

### NewAccountActionRequestDto

`func NewAccountActionRequestDto() *AccountActionRequestDto`

NewAccountActionRequestDto instantiates a new AccountActionRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountActionRequestDtoWithDefaults

`func NewAccountActionRequestDtoWithDefaults() *AccountActionRequestDto`

NewAccountActionRequestDtoWithDefaults instantiates a new AccountActionRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountRequestId

`func (o *AccountActionRequestDto) GetAccountRequestId() string`

GetAccountRequestId returns the AccountRequestId field if non-nil, zero value otherwise.

### GetAccountRequestIdOk

`func (o *AccountActionRequestDto) GetAccountRequestIdOk() (*string, bool)`

GetAccountRequestIdOk returns a tuple with the AccountRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountRequestId

`func (o *AccountActionRequestDto) SetAccountRequestId(v string)`

SetAccountRequestId sets AccountRequestId field to given value.

### HasAccountRequestId

`func (o *AccountActionRequestDto) HasAccountRequestId() bool`

HasAccountRequestId returns a boolean if a field has been set.

### GetRequestType

`func (o *AccountActionRequestDto) GetRequestType() string`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *AccountActionRequestDto) GetRequestTypeOk() (*string, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *AccountActionRequestDto) SetRequestType(v string)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *AccountActionRequestDto) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### GetCreatedAt

`func (o *AccountActionRequestDto) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *AccountActionRequestDto) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *AccountActionRequestDto) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *AccountActionRequestDto) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetCompletedAt

`func (o *AccountActionRequestDto) GetCompletedAt() SailPointTime`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *AccountActionRequestDto) GetCompletedAtOk() (*SailPointTime, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *AccountActionRequestDto) SetCompletedAt(v SailPointTime)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *AccountActionRequestDto) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.

### GetOverallStatus

`func (o *AccountActionRequestDto) GetOverallStatus() string`

GetOverallStatus returns the OverallStatus field if non-nil, zero value otherwise.

### GetOverallStatusOk

`func (o *AccountActionRequestDto) GetOverallStatusOk() (*string, bool)`

GetOverallStatusOk returns a tuple with the OverallStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverallStatus

`func (o *AccountActionRequestDto) SetOverallStatus(v string)`

SetOverallStatus sets OverallStatus field to given value.

### HasOverallStatus

`func (o *AccountActionRequestDto) HasOverallStatus() bool`

HasOverallStatus returns a boolean if a field has been set.

### GetRequester

`func (o *AccountActionRequestDto) GetRequester() AccountActionRequestDtoRequester`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *AccountActionRequestDto) GetRequesterOk() (*AccountActionRequestDtoRequester, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *AccountActionRequestDto) SetRequester(v AccountActionRequestDtoRequester)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *AccountActionRequestDto) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetRequesterComments

`func (o *AccountActionRequestDto) GetRequesterComments() string`

GetRequesterComments returns the RequesterComments field if non-nil, zero value otherwise.

### GetRequesterCommentsOk

`func (o *AccountActionRequestDto) GetRequesterCommentsOk() (*string, bool)`

GetRequesterCommentsOk returns a tuple with the RequesterComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterComments

`func (o *AccountActionRequestDto) SetRequesterComments(v string)`

SetRequesterComments sets RequesterComments field to given value.

### HasRequesterComments

`func (o *AccountActionRequestDto) HasRequesterComments() bool`

HasRequesterComments returns a boolean if a field has been set.

### GetAccountDetails

`func (o *AccountActionRequestDto) GetAccountDetails() AccountActionRequestDtoAccountDetails`

GetAccountDetails returns the AccountDetails field if non-nil, zero value otherwise.

### GetAccountDetailsOk

`func (o *AccountActionRequestDto) GetAccountDetailsOk() (*AccountActionRequestDtoAccountDetails, bool)`

GetAccountDetailsOk returns a tuple with the AccountDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountDetails

`func (o *AccountActionRequestDto) SetAccountDetails(v AccountActionRequestDtoAccountDetails)`

SetAccountDetails sets AccountDetails field to given value.

### HasAccountDetails

`func (o *AccountActionRequestDto) HasAccountDetails() bool`

HasAccountDetails returns a boolean if a field has been set.

### GetCorrelatedIdentity

`func (o *AccountActionRequestDto) GetCorrelatedIdentity() AccountActionRequestDtoCorrelatedIdentity`

GetCorrelatedIdentity returns the CorrelatedIdentity field if non-nil, zero value otherwise.

### GetCorrelatedIdentityOk

`func (o *AccountActionRequestDto) GetCorrelatedIdentityOk() (*AccountActionRequestDtoCorrelatedIdentity, bool)`

GetCorrelatedIdentityOk returns a tuple with the CorrelatedIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedIdentity

`func (o *AccountActionRequestDto) SetCorrelatedIdentity(v AccountActionRequestDtoCorrelatedIdentity)`

SetCorrelatedIdentity sets CorrelatedIdentity field to given value.

### HasCorrelatedIdentity

`func (o *AccountActionRequestDto) HasCorrelatedIdentity() bool`

HasCorrelatedIdentity returns a boolean if a field has been set.

### GetManagerReference

`func (o *AccountActionRequestDto) GetManagerReference() IdentityReference`

GetManagerReference returns the ManagerReference field if non-nil, zero value otherwise.

### GetManagerReferenceOk

`func (o *AccountActionRequestDto) GetManagerReferenceOk() (*IdentityReference, bool)`

GetManagerReferenceOk returns a tuple with the ManagerReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagerReference

`func (o *AccountActionRequestDto) SetManagerReference(v IdentityReference)`

SetManagerReference sets ManagerReference field to given value.

### HasManagerReference

`func (o *AccountActionRequestDto) HasManagerReference() bool`

HasManagerReference returns a boolean if a field has been set.

### SetManagerReferenceNil

`func (o *AccountActionRequestDto) SetManagerReferenceNil(b bool)`

 SetManagerReferenceNil sets the value for ManagerReference to be an explicit nil

### UnsetManagerReference
`func (o *AccountActionRequestDto) UnsetManagerReference()`

UnsetManagerReference ensures that no value is present for ManagerReference, not even an explicit nil
### GetApprovalRequestId

`func (o *AccountActionRequestDto) GetApprovalRequestId() string`

GetApprovalRequestId returns the ApprovalRequestId field if non-nil, zero value otherwise.

### GetApprovalRequestIdOk

`func (o *AccountActionRequestDto) GetApprovalRequestIdOk() (*string, bool)`

GetApprovalRequestIdOk returns a tuple with the ApprovalRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalRequestId

`func (o *AccountActionRequestDto) SetApprovalRequestId(v string)`

SetApprovalRequestId sets ApprovalRequestId field to given value.

### HasApprovalRequestId

`func (o *AccountActionRequestDto) HasApprovalRequestId() bool`

HasApprovalRequestId returns a boolean if a field has been set.

### GetAccountRequestPhases

`func (o *AccountActionRequestDto) GetAccountRequestPhases() []AccountRequestPhase`

GetAccountRequestPhases returns the AccountRequestPhases field if non-nil, zero value otherwise.

### GetAccountRequestPhasesOk

`func (o *AccountActionRequestDto) GetAccountRequestPhasesOk() (*[]AccountRequestPhase, bool)`

GetAccountRequestPhasesOk returns a tuple with the AccountRequestPhases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountRequestPhases

`func (o *AccountActionRequestDto) SetAccountRequestPhases(v []AccountRequestPhase)`

SetAccountRequestPhases sets AccountRequestPhases field to given value.

### HasAccountRequestPhases

`func (o *AccountActionRequestDto) HasAccountRequestPhases() bool`

HasAccountRequestPhases returns a boolean if a field has been set.

### GetApprovalDetails

`func (o *AccountActionRequestDto) GetApprovalDetails() []ApprovalDetails`

GetApprovalDetails returns the ApprovalDetails field if non-nil, zero value otherwise.

### GetApprovalDetailsOk

`func (o *AccountActionRequestDto) GetApprovalDetailsOk() (*[]ApprovalDetails, bool)`

GetApprovalDetailsOk returns a tuple with the ApprovalDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalDetails

`func (o *AccountActionRequestDto) SetApprovalDetails(v []ApprovalDetails)`

SetApprovalDetails sets ApprovalDetails field to given value.

### HasApprovalDetails

`func (o *AccountActionRequestDto) HasApprovalDetails() bool`

HasApprovalDetails returns a boolean if a field has been set.

### GetErrorDetails

`func (o *AccountActionRequestDto) GetErrorDetails() string`

GetErrorDetails returns the ErrorDetails field if non-nil, zero value otherwise.

### GetErrorDetailsOk

`func (o *AccountActionRequestDto) GetErrorDetailsOk() (*string, bool)`

GetErrorDetailsOk returns a tuple with the ErrorDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDetails

`func (o *AccountActionRequestDto) SetErrorDetails(v string)`

SetErrorDetails sets ErrorDetails field to given value.

### HasErrorDetails

`func (o *AccountActionRequestDto) HasErrorDetails() bool`

HasErrorDetails returns a boolean if a field has been set.

### SetErrorDetailsNil

`func (o *AccountActionRequestDto) SetErrorDetailsNil(b bool)`

 SetErrorDetailsNil sets the value for ErrorDetails to be an explicit nil

### UnsetErrorDetails
`func (o *AccountActionRequestDto) UnsetErrorDetails()`

UnsetErrorDetails ensures that no value is present for ErrorDetails, not even an explicit nil

