<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Lcobucci\JWT\Parser;

class MyAuthUserController extends Controller
{
    public function CurrentUser()
    {
        return Auth::user();
    }
    public function Logout(Request $request)
    {
        $tokenRepository = app('Laravel\Passport\TokenRepository');
        $refreshTokenRepository = app('Laravel\Passport\RefreshTokenRepository');
        $Token = $request->bearerToken();
        $TokenId = (new Parser())->parse($Token)->getClaims()['jti']->getValue();
        // Revoke an access token...
        $tokenRepository->revokeAccessToken($TokenId);
        // Revoke all of the token's refresh tokens...
        $refreshTokenRepository->revokeRefreshTokensByAccessTokenId($TokenId); 
    }
}
