declare -a arr=("robot1" "robot2")
command='echo here'
# command='sudo bin/changeField.py SPL_B'
# command='sudo reboot now'
# command='sudo shutdown now'
for r in "${arr[@]}"
do
    echo $r
    ssh nao@$r.local $command
done
