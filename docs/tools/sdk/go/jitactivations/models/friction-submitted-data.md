# FrictionSubmittedData

# FrictionSubmittedData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Justification** | Pointer to **string** | Justification text. | [optional] 
**Bypass** | Pointer to **bool** | Whether this step was bypassed. | [optional] [default to false]
**TicketId** | Pointer to **string** | Ticketing system identifier. | [optional] 
**IsValidTicket** | Pointer to **bool** | Whether the ticket is valid. Set by the server. | [optional] [readonly] [default to false]
**Attempts** | Pointer to **int32** | Count of failed submissions for this step. The server sets this value and ignores it on PATCH. | [optional] [readonly] 
**ReauthSuccessful** | Pointer to **bool** | Whether reauthentication succeeded. | [optional] [default to false]
**ReauthDate** | Pointer to **string** | Time of reauthentication. | [optional] 
**IntegrationDisabled** | Pointer to **bool** | Whether the ticketing integration is disabled. Set by the server. | [optional] [readonly] [default to false]

## Methods

### NewFrictionSubmittedData

`func NewFrictionSubmittedData() *FrictionSubmittedData`

NewFrictionSubmittedData instantiates a new FrictionSubmittedData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFrictionSubmittedDataWithDefaults

`func NewFrictionSubmittedDataWithDefaults() *FrictionSubmittedData`

NewFrictionSubmittedDataWithDefaults instantiates a new FrictionSubmittedData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJustification

`func (o *FrictionSubmittedData) GetJustification() string`

GetJustification returns the Justification field if non-nil, zero value otherwise.

### GetJustificationOk

`func (o *FrictionSubmittedData) GetJustificationOk() (*string, bool)`

GetJustificationOk returns a tuple with the Justification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJustification

`func (o *FrictionSubmittedData) SetJustification(v string)`

SetJustification sets Justification field to given value.

### HasJustification

`func (o *FrictionSubmittedData) HasJustification() bool`

HasJustification returns a boolean if a field has been set.

### GetBypass

`func (o *FrictionSubmittedData) GetBypass() bool`

GetBypass returns the Bypass field if non-nil, zero value otherwise.

### GetBypassOk

`func (o *FrictionSubmittedData) GetBypassOk() (*bool, bool)`

GetBypassOk returns a tuple with the Bypass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBypass

`func (o *FrictionSubmittedData) SetBypass(v bool)`

SetBypass sets Bypass field to given value.

### HasBypass

`func (o *FrictionSubmittedData) HasBypass() bool`

HasBypass returns a boolean if a field has been set.

### GetTicketId

`func (o *FrictionSubmittedData) GetTicketId() string`

GetTicketId returns the TicketId field if non-nil, zero value otherwise.

### GetTicketIdOk

`func (o *FrictionSubmittedData) GetTicketIdOk() (*string, bool)`

GetTicketIdOk returns a tuple with the TicketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTicketId

`func (o *FrictionSubmittedData) SetTicketId(v string)`

SetTicketId sets TicketId field to given value.

### HasTicketId

`func (o *FrictionSubmittedData) HasTicketId() bool`

HasTicketId returns a boolean if a field has been set.

### GetIsValidTicket

`func (o *FrictionSubmittedData) GetIsValidTicket() bool`

GetIsValidTicket returns the IsValidTicket field if non-nil, zero value otherwise.

### GetIsValidTicketOk

`func (o *FrictionSubmittedData) GetIsValidTicketOk() (*bool, bool)`

GetIsValidTicketOk returns a tuple with the IsValidTicket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsValidTicket

`func (o *FrictionSubmittedData) SetIsValidTicket(v bool)`

SetIsValidTicket sets IsValidTicket field to given value.

### HasIsValidTicket

`func (o *FrictionSubmittedData) HasIsValidTicket() bool`

HasIsValidTicket returns a boolean if a field has been set.

### GetAttempts

`func (o *FrictionSubmittedData) GetAttempts() int32`

GetAttempts returns the Attempts field if non-nil, zero value otherwise.

### GetAttemptsOk

`func (o *FrictionSubmittedData) GetAttemptsOk() (*int32, bool)`

GetAttemptsOk returns a tuple with the Attempts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttempts

`func (o *FrictionSubmittedData) SetAttempts(v int32)`

SetAttempts sets Attempts field to given value.

### HasAttempts

`func (o *FrictionSubmittedData) HasAttempts() bool`

HasAttempts returns a boolean if a field has been set.

### GetReauthSuccessful

`func (o *FrictionSubmittedData) GetReauthSuccessful() bool`

GetReauthSuccessful returns the ReauthSuccessful field if non-nil, zero value otherwise.

### GetReauthSuccessfulOk

`func (o *FrictionSubmittedData) GetReauthSuccessfulOk() (*bool, bool)`

GetReauthSuccessfulOk returns a tuple with the ReauthSuccessful field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthSuccessful

`func (o *FrictionSubmittedData) SetReauthSuccessful(v bool)`

SetReauthSuccessful sets ReauthSuccessful field to given value.

### HasReauthSuccessful

`func (o *FrictionSubmittedData) HasReauthSuccessful() bool`

HasReauthSuccessful returns a boolean if a field has been set.

### GetReauthDate

`func (o *FrictionSubmittedData) GetReauthDate() string`

GetReauthDate returns the ReauthDate field if non-nil, zero value otherwise.

### GetReauthDateOk

`func (o *FrictionSubmittedData) GetReauthDateOk() (*string, bool)`

GetReauthDateOk returns a tuple with the ReauthDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthDate

`func (o *FrictionSubmittedData) SetReauthDate(v string)`

SetReauthDate sets ReauthDate field to given value.

### HasReauthDate

`func (o *FrictionSubmittedData) HasReauthDate() bool`

HasReauthDate returns a boolean if a field has been set.

### GetIntegrationDisabled

`func (o *FrictionSubmittedData) GetIntegrationDisabled() bool`

GetIntegrationDisabled returns the IntegrationDisabled field if non-nil, zero value otherwise.

### GetIntegrationDisabledOk

`func (o *FrictionSubmittedData) GetIntegrationDisabledOk() (*bool, bool)`

GetIntegrationDisabledOk returns a tuple with the IntegrationDisabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationDisabled

`func (o *FrictionSubmittedData) SetIntegrationDisabled(v bool)`

SetIntegrationDisabled sets IntegrationDisabled field to given value.

### HasIntegrationDisabled

`func (o *FrictionSubmittedData) HasIntegrationDisabled() bool`

HasIntegrationDisabled returns a boolean if a field has been set.


