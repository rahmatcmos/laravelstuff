<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Bevestiging inschrijving...</title>
</head>
<body>
    <h1>Bedankt voor het inschrijven!</h1>
    <p>
        U moet alleen nog heel even uw <a href="{{ url("register/confirm/{$user->token}") }}">e-mail adres</a>
        verifiëren!
    </p>
</body>
</html>