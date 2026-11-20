# JitactivationhistorydocumentSummary

# JitactivationhistorydocumentSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PolicyMatches** | Pointer to [**[]JitactivationhistorydocumentSummaryPolicyMatchesInner**](jitactivationhistorydocument-summary-policy-matches-inner) | List of policies that matched during activation evaluation. | [optional] 
**Reauthentication** | Pointer to [**NullableJitactivationhistorydocumentSummaryReauthentication**](jitactivationhistorydocument-summary-reauthentication) |  | [optional] 
**Justification** | Pointer to [**NullableJitactivationhistorydocumentSummaryJustification**](jitactivationhistorydocument-summary-justification) |  | [optional] 
**ServiceNowTicket** | Pointer to [**NullableJitactivationhistorydocumentSummaryServiceNowTicket**](jitactivationhistorydocument-summary-service-now-ticket) |  | [optional] 

## Methods

### NewJitactivationhistorydocumentSummary

`func NewJitactivationhistorydocumentSummary() *JitactivationhistorydocumentSummary`

NewJitactivationhistorydocumentSummary instantiates a new JitactivationhistorydocumentSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitactivationhistorydocumentSummaryWithDefaults

`func NewJitactivationhistorydocumentSummaryWithDefaults() *JitactivationhistorydocumentSummary`

NewJitactivationhistorydocumentSummaryWithDefaults instantiates a new JitactivationhistorydocumentSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicyMatches

`func (o *JitactivationhistorydocumentSummary) GetPolicyMatches() []JitactivationhistorydocumentSummaryPolicyMatchesInner`

GetPolicyMatches returns the PolicyMatches field if non-nil, zero value otherwise.

### GetPolicyMatchesOk

`func (o *JitactivationhistorydocumentSummary) GetPolicyMatchesOk() (*[]JitactivationhistorydocumentSummaryPolicyMatchesInner, bool)`

GetPolicyMatchesOk returns a tuple with the PolicyMatches field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyMatches

`func (o *JitactivationhistorydocumentSummary) SetPolicyMatches(v []JitactivationhistorydocumentSummaryPolicyMatchesInner)`

SetPolicyMatches sets PolicyMatches field to given value.

### HasPolicyMatches

`func (o *JitactivationhistorydocumentSummary) HasPolicyMatches() bool`

HasPolicyMatches returns a boolean if a field has been set.

### GetReauthentication

`func (o *JitactivationhistorydocumentSummary) GetReauthentication() JitactivationhistorydocumentSummaryReauthentication`

GetReauthentication returns the Reauthentication field if non-nil, zero value otherwise.

### GetReauthenticationOk

`func (o *JitactivationhistorydocumentSummary) GetReauthenticationOk() (*JitactivationhistorydocumentSummaryReauthentication, bool)`

GetReauthenticationOk returns a tuple with the Reauthentication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthentication

`func (o *JitactivationhistorydocumentSummary) SetReauthentication(v JitactivationhistorydocumentSummaryReauthentication)`

SetReauthentication sets Reauthentication field to given value.

### HasReauthentication

`func (o *JitactivationhistorydocumentSummary) HasReauthentication() bool`

HasReauthentication returns a boolean if a field has been set.

### SetReauthenticationNil

`func (o *JitactivationhistorydocumentSummary) SetReauthenticationNil(b bool)`

 SetReauthenticationNil sets the value for Reauthentication to be an explicit nil

### UnsetReauthentication
`func (o *JitactivationhistorydocumentSummary) UnsetReauthentication()`

UnsetReauthentication ensures that no value is present for Reauthentication, not even an explicit nil
### GetJustification

`func (o *JitactivationhistorydocumentSummary) GetJustification() JitactivationhistorydocumentSummaryJustification`

GetJustification returns the Justification field if non-nil, zero value otherwise.

### GetJustificationOk

`func (o *JitactivationhistorydocumentSummary) GetJustificationOk() (*JitactivationhistorydocumentSummaryJustification, bool)`

GetJustificationOk returns a tuple with the Justification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJustification

`func (o *JitactivationhistorydocumentSummary) SetJustification(v JitactivationhistorydocumentSummaryJustification)`

SetJustification sets Justification field to given value.

### HasJustification

`func (o *JitactivationhistorydocumentSummary) HasJustification() bool`

HasJustification returns a boolean if a field has been set.

### SetJustificationNil

`func (o *JitactivationhistorydocumentSummary) SetJustificationNil(b bool)`

 SetJustificationNil sets the value for Justification to be an explicit nil

### UnsetJustification
`func (o *JitactivationhistorydocumentSummary) UnsetJustification()`

UnsetJustification ensures that no value is present for Justification, not even an explicit nil
### GetServiceNowTicket

`func (o *JitactivationhistorydocumentSummary) GetServiceNowTicket() JitactivationhistorydocumentSummaryServiceNowTicket`

GetServiceNowTicket returns the ServiceNowTicket field if non-nil, zero value otherwise.

### GetServiceNowTicketOk

`func (o *JitactivationhistorydocumentSummary) GetServiceNowTicketOk() (*JitactivationhistorydocumentSummaryServiceNowTicket, bool)`

GetServiceNowTicketOk returns a tuple with the ServiceNowTicket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceNowTicket

`func (o *JitactivationhistorydocumentSummary) SetServiceNowTicket(v JitactivationhistorydocumentSummaryServiceNowTicket)`

SetServiceNowTicket sets ServiceNowTicket field to given value.

### HasServiceNowTicket

`func (o *JitactivationhistorydocumentSummary) HasServiceNowTicket() bool`

HasServiceNowTicket returns a boolean if a field has been set.

### SetServiceNowTicketNil

`func (o *JitactivationhistorydocumentSummary) SetServiceNowTicketNil(b bool)`

 SetServiceNowTicketNil sets the value for ServiceNowTicket to be an explicit nil

### UnsetServiceNowTicket
`func (o *JitactivationhistorydocumentSummary) UnsetServiceNowTicket()`

UnsetServiceNowTicket ensures that no value is present for ServiceNowTicket, not even an explicit nil

