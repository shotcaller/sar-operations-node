cd ext-scripts
echo ''
echo '-------------------------------------------------------------------------------------------------------------'
echo 'Launching Leeway Calculation Phase.'
echo '-------------------------------------------------------------------------------------------------------------'
sleep 1
echo 'Do NOT try to use the webapp until this phase is complete and status is set to disconnected to avoid load.'
echo '-------------------------------------------------------------------------------------------------------------'
sleep 5

python3 calculations.py 10 11 12 13 14 15 16
python3 leeway.py # ignore this line
cd calculations
mv leeway-plot.png leeway-plot-modified.png
ncdump-json leeway-vars.nc -j > leeway-vars-shellout.json
clear
echo '-------------------------------------------------------------------------------------------------------------'
echo 'done'
echo '-------------------------------------------------------------------------------------------------------------'