function validUserNames(usernames) {
    const validNames = usernames.filter(names => names.length < 10);
    console.log(validNames);
    // return validNames <- Added this line for the Udemy testing.
}

validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);