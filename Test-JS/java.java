public boolean isExplode(int Missile1X, int Missile1Y, int Missile2X, int Missile2Y)
{
    if((Missile1X >= this.X && Missile1X <= this.X+90) || (Missile2X>=this.X && Missile2X <= this.X+90))
    {
            if((Missile1Y >= this.Y && Missile1Y <= this.Y+20) || (Missile2Y>=this.Y && Missile2Y <= this.Y+20))
            {
                explode=true;
            }
    }
    else{
        explode=false;
    }
return explode; 
}