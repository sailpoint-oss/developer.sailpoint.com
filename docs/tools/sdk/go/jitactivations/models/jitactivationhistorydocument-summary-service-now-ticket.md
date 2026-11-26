# JitactivationhistorydocumentSummaryServiceNowTicket

# JitactivationhistorydocumentSummaryServiceNowTicket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Required** | Pointer to **bool** | Whether a ServiceNow ticket was required for this activation. | [optional] [default to false]
**Bypassed** | Pointer to **bool** | Whether the ServiceNow ticket requirement was bypassed. | [optional] [default to false]
**TicketReference** | Pointer to **NullableString** | ServiceNow ticket reference submitted by the user. | [optional] 

## Methods

### NewJitactivationhistorydocumentSummaryServiceNowTicket

`func NewJitactivationhistorydocumentSummaryServiceNowTicket() *JitactivationhistorydocumentSummaryServiceNowTicket`

NewJitactivationhistorydocumentSummaryServiceNowTicket instantiates a new JitactivationhistorydocumentSummaryServiceNowTicket object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitactivationhistorydocumentSummaryServiceNowTicketWithDefaults

`func NewJitactivationhistorydocumentSummaryServiceNowTicketWithDefaults() *JitactivationhistorydocumentSummaryServiceNowTicket`

NewJitactivationhistorydocumentSummaryServiceNowTicketWithDefaults instantiates a new JitactivationhistorydocumentSummaryServiceNowTicket object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequired

`func (o *JitactivationhistorydocumentSummaryServiceNowTicket) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *JitactivationhistorydocumentSummaryServiceNowTicket) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *JitactivationhistorydocumentSummaryServiceNowTicket) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *JitactivationhistorydocumentSummaryServiceNowTicket) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetBypassed

`func (o *JitactivationhistorydocumentSummaryServiceNowTicket) GetBypassed() bool`

GetBypassed returns the Bypassed field if non-nil, zero value otherwise.

### GetBypassedOk

`func (o *JitactivationhistorydocumentSummaryServiceNowTicket) GetBypassedOk() (*bool, bool)`

GetBypassedOk returns a tuple with the Bypassed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBypassed

`func (o *JitactivationhistorydocumentSummaryServiceNowTicket) SetBypassed(v bool)`

SetBypassed sets Bypassed field to given value.

### HasBypassed

`func (o *JitactivationhistorydocumentSummaryServiceNowTicket) HasBypassed() bool`

HasBypassed returns a boolean if a field has been set.

### GetTicketReference

`func (o *JitactivationhistorydocumentSummaryServiceNowTicket) GetTicketReference() string`

GetTicketReference returns the TicketReference field if non-nil, zero value otherwise.

### GetTicketReferenceOk

`func (o *JitactivationhistorydocumentSummaryServiceNowTicket) GetTicketReferenceOk() (*string, bool)`

GetTicketReferenceOk returns a tuple with the TicketReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTicketReference

`func (o *JitactivationhistorydocumentSummaryServiceNowTicket) SetTicketReference(v string)`

SetTicketReference sets TicketReference field to given value.

### HasTicketReference

`func (o *JitactivationhistorydocumentSummaryServiceNowTicket) HasTicketReference() bool`

HasTicketReference returns a boolean if a field has been set.

### SetTicketReferenceNil

`func (o *JitactivationhistorydocumentSummaryServiceNowTicket) SetTicketReferenceNil(b bool)`

 SetTicketReferenceNil sets the value for TicketReference to be an explicit nil

### UnsetTicketReference
`func (o *JitactivationhistorydocumentSummaryServiceNowTicket) UnsetTicketReference()`

UnsetTicketReference ensures that no value is present for TicketReference, not even an explicit nil

